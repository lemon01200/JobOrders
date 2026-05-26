import { useEffect, useState, useRef, FormEvent } from 'react';
import { X, Loader2 } from 'lucide-react';
import { FOUNDING_SEATS_LEFT } from '../config';
import { notifyWebhook } from '../lib/webhook';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  variant?: 'founding' | 'standard';
}

type ModalState = 'default' | 'loading' | 'success' | 'waitlist' | 'error' | 'already-registered';

// Part 2.4 - Modal states for Waitlist mode
export default function SignupModal({ isOpen, onClose, variant = 'founding' }: SignupModalProps) {
  const [email, setEmail] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [state, setState] = useState<ModalState>('default');
  const [seatNumber, setSeatNumber] = useState<number | null>(null);
  const [error, setError] = useState('');
  const emailInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap and accessibility
  useEffect(() => {
    if (isOpen) {
      // Restore email from sessionStorage
      const savedEmail = sessionStorage.getItem('signup_email');
      if (savedEmail) setEmail(savedEmail);

      // Focus input after animation
      setTimeout(() => emailInputRef.current?.focus(), 250);

      // Lock body scroll
      document.body.style.overflow = 'hidden';

      // ESC key handler
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') handleClose();
      };
      document.addEventListener('keydown', handleEsc);

      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    // Save email to sessionStorage
    if (email) {
      sessionStorage.setItem('signup_email', email);
    }

    // Reset state
    setState('default');
    setLinkedIn('');
    setError('');

    onClose();
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("That doesn't look like a valid work email. Try again?");
      return;
    }

    setState('loading');
    setError('');

    notifyWebhook({ email });

    // Simulate API call
    // In production, replace with actual API endpoint
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Mock: Check if already registered
      const isExisting = false; // Replace with actual check

      if (isExisting) {
        setState('already-registered');
        setSeatNumber(14); // Mock seat number
        return;
      }

      // Mock: Check if waitlist is full
      const isFull = FOUNDING_SEATS_LEFT === 0;

      if (isFull) {
        setState('waitlist');
        setSeatNumber(51); // Charter Members waitlist position
        return;
      }

      // Success
      setState('success');
      setSeatNumber(50 - FOUNDING_SEATS_LEFT + 1); // Calculate seat number

      // TODO: Actual backend integration
      // - POST to /api/waitlist with { email, variant, utm_params }
      // - Decrement FOUNDING_SEATS_LEFT
      // - Send welcome email
      // - Update live counter

    } catch (err) {
      setState('error');
      setError('Something broke on our end. Please try again, or email founder@joborders.com — that goes straight to me.');
    }
  };

  const handleLinkedInSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (linkedIn.trim()) {
      notifyWebhook({ email, linkedInUrl: linkedIn.trim() });
    }

    handleClose();
  };

  const handleResendConfirmation = async () => {
    setState('loading');

    // Simulate resend
    await new Promise(resolve => setTimeout(resolve, 1000));

    setState('success');
  };

  if (!isOpen) return null;

  const seatsLeft = FOUNDING_SEATS_LEFT;
  const isFoundingFull = seatsLeft === 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative bg-surface rounded-[20px] w-full max-w-[480px] p-6 md:p-10 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-ink/60 hover:text-ink transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Default State */}
        {state === 'default' && (
          <div className="space-y-6">
            {/* Founding badge */}
            {variant === 'founding' && !isFoundingFull && (
              <div className="inline-flex items-center gap-2 bg-founding-yellow text-ink px-3 py-2 rounded-md font-mono text-sm font-semibold">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="flex-shrink-0">
                  <path d="M2 3C1.44772 3 1 3.44772 1 4V6.5C1.82843 6.5 2.5 7.17157 2.5 8C2.5 8.82843 1.82843 9.5 1 9.5V12C1 12.5523 1.44772 13 2 13H14C14.5523 13 15 12.5523 15 12V9.5C14.1716 9.5 13.5 8.82843 13.5 8C13.5 7.17157 14.1716 6.5 15 6.5V4C15 3.44772 14.5523 3 14 3H2Z"/>
                </svg>
                FOUNDING 50 WAITLIST · {seatsLeft} seats left
              </div>
            )}

            {/* Heading */}
            <div>
              <h2 id="modal-title" className="text-[28px] font-serif mb-3">
                {variant === 'founding' && !isFoundingFull
                  ? 'Reserve your Founding seat.'
                  : 'Join the launch waitlist.'}
              </h2>
              <p className="text-base text-ink/70 leading-relaxed">
                {variant === 'founding' && !isFoundingFull ? (
                  <>
                    We're launching in Q3 2026. First 50 sign-ups lock in $99/mo for life — even when public pricing hits $199.
                  </>
                ) : (
                  <>
                    Get notified the moment JobOrders ships. Public pricing: $199/mo at launch.
                  </>
                )}
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-hairline" />

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-[13px] uppercase tracking-widest text-ink/60 mb-2">
                  Work email
                </label>
                <input
                  ref={emailInputRef}
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  placeholder="you@youragency.com"
                  className={`w-full h-14 px-4 text-lg border-[1.5px] rounded-xl transition-all ${
                    error
                      ? 'border-[#DC2626] focus:border-[#DC2626] focus:ring-2 focus:ring-[#DC2626]/20'
                      : 'border-hairline focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20'
                  } outline-none`}
                  required
                />
                {error && (
                  <p className="text-sm text-[#DC2626] mt-2" role="alert" aria-live="polite">
                    {error}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={!email || !validateEmail(email)}
                className="w-full h-14 bg-ink text-white rounded-[14px] text-lg font-medium hover:bg-brand-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Reserve my seat →
              </button>

              {/* Trust bullets */}
              <div className="space-y-2 text-sm">
                <div className="flex gap-2 items-start">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8 L6 11 L13 4" />
                  </svg>
                  <span>No payment now — pay only when we launch</span>
                </div>
                {variant === 'founding' && !isFoundingFull && (
                  <div className="flex gap-2 items-start">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8 L6 11 L13 4" />
                  </svg>
                    <span>Locked at $99/mo for life</span>
                  </div>
                )}
                <div className="flex gap-2 items-start">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8 L6 11 L13 4" />
                  </svg>
                  <span>Unsubscribe anytime, one click</span>
                </div>
              </div>
            </form>

            {/* Divider */}
            <div className="border-t border-hairline" />

            {/* Footer link */}
            <p className="text-center text-sm text-ink/60">
              Already reserved?{' '}
              <button
                onClick={() => setState('already-registered')}
                className="text-brand-primary hover:underline"
              >
                Resend my confirmation
              </button>
            </p>
          </div>
        )}

        {/* Loading State */}
        {state === 'loading' && (
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-founding-yellow text-ink px-3 py-2 rounded-md font-mono text-sm font-semibold">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="flex-shrink-0">
                <path d="M2 3C1.44772 3 1 3.44772 1 4V6.5C1.82843 6.5 2.5 7.17157 2.5 8C2.5 8.82843 1.82843 9.5 1 9.5V12C1 12.5523 1.44772 13 2 13H14C14.5523 13 15 12.5523 15 12V9.5C14.1716 9.5 13.5 8.82843 13.5 8C13.5 7.17157 14.1716 6.5 15 6.5V4C15 3.44772 14.5523 3 14 3H2Z"/>
              </svg>
              FOUNDING 50 WAITLIST · {seatsLeft} seats left
            </div>

            <div>
              <h2 className="text-[28px] font-serif mb-3">Reserve your Founding seat.</h2>
              <p className="text-base text-ink/70 leading-relaxed">
                We're launching in Q3 2026. First 50 sign-ups lock in $99/mo for life — even when public pricing hits $199.
              </p>
            </div>

            <div className="border-t border-hairline" />

            <div className="space-y-5">
              <div>
                <label className="block text-[13px] uppercase tracking-widest text-ink/60 mb-2">
                  Work email
                </label>
                <input
                  type="email"
                  value={email}
                  disabled
                  className="w-full h-14 px-4 text-lg border-[1.5px] border-hairline rounded-xl bg-soft-surface"
                />
              </div>

              <button
                disabled
                className="w-full h-14 bg-ink text-white rounded-[14px] text-lg font-medium flex items-center justify-center gap-2"
              >
                <Loader2 className="w-5 h-5 animate-spin" />
                Reserving your seat...
              </button>
            </div>
          </div>
        )}

        {/* Success State */}
        {state === 'success' && seatNumber && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="mb-4 inline-flex items-center justify-center">
                <svg width="96" height="96" viewBox="0 0 96 96" fill="none" className="text-founding-yellow">
                  <path d="M12 18C8.68629 18 6 20.6863 6 24V39C10.9706 39 15 43.0294 15 48C15 52.9706 10.9706 57 6 57V72C6 75.3137 8.68629 78 12 78H84C87.3137 78 90 75.3137 90 72V57C85.0294 57 81 52.9706 81 48C81 43.0294 85.0294 39 90 39V24C90 20.6863 87.3137 18 84 18H12Z" fill="currentColor"/>
                  {/* Perforations */}
                  <line x1="48" y1="24" x2="48" y2="30" stroke="#0B0F19" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="48" y1="36" x2="48" y2="42" stroke="#0B0F19" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="48" y1="48" x2="48" y2="54" stroke="#0B0F19" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="48" y1="60" x2="48" y2="66" stroke="#0B0F19" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h2 className="text-[28px] font-serif mb-3">
                You're in. Seat #{seatNumber} of 50.
              </h2>
              <p className="text-base text-ink/70 leading-relaxed">
                Check your inbox — we just sent a confirmation email. The day we launch (target: Q3 2026),
                you'll get a magic link to activate.
              </p>
              <p className="text-base text-ink/70 leading-relaxed mt-4">
                Your price is locked from that day forward: <strong>$99/mo, for life</strong>, even when
                public pricing hits $199.
              </p>
            </div>

            <div className="border-t border-hairline" />

            <form onSubmit={handleLinkedInSubmit} className="space-y-5">
              <div>
                <div className="text-[13px] uppercase tracking-widest text-ink/60 mb-3">
                  WHILE YOU'RE HERE…
                </div>
                <p className="text-sm text-ink/70 mb-4">
                  Drop your LinkedIn so we can tailor your digest before launch day.
                </p>
                <input
                  type="text"
                  value={linkedIn}
                  onChange={(e) => setLinkedIn(e.target.value)}
                  placeholder="linkedin.com/in/yourname"
                  className="w-full h-14 px-4 text-lg border-[1.5px] border-hairline rounded-xl focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-14 bg-ink text-white rounded-[14px] text-lg font-medium hover:bg-brand-primary transition-colors"
              >
                Save & continue →
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="w-full text-sm text-ink/60 hover:text-ink transition-colors"
              >
                Skip — I'll do this later
              </button>
            </form>
          </div>
        )}

        {/* Waitlist Full State */}
        {state === 'waitlist' && seatNumber && (
          <div className="space-y-6 text-center">
            <h2 className="text-[28px] font-serif">Founding 50 is full.</h2>
            <p className="text-base text-ink/70 leading-relaxed">
              But you can still get the next tier at <strong>$129/mo for life</strong> (Charter Members)
              before public pricing hits $199 at launch.
            </p>
            <p className="text-base text-ink/70 leading-relaxed">
              You're <strong>#{seatNumber}</strong> on the Charter Members waitlist. We'll email you the
              moment that tier opens.
            </p>

            <button
              onClick={handleClose}
              className="w-full h-14 bg-ink text-white rounded-[14px] text-lg font-medium hover:bg-brand-primary transition-colors"
            >
              Got it →
            </button>
          </div>
        )}

        {/* Already Registered State */}
        {state === 'already-registered' && (
          <div className="space-y-6">
            <h2 className="text-[28px] font-serif">You're already on the list.</h2>
            <p className="text-base text-ink/70 leading-relaxed">
              This email is already reserved (seat #{seatNumber || 'unknown'}). Want us to resend your
              confirmation?
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleResendConfirmation();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-[13px] uppercase tracking-widest text-ink/60 mb-2">
                  Work email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-14 px-4 text-lg border-[1.5px] border-hairline rounded-xl focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full h-14 bg-ink text-white rounded-[14px] text-lg font-medium hover:bg-brand-primary transition-colors"
              >
                Resend my confirmation →
              </button>

              <button
                type="button"
                onClick={() => {
                  setEmail('');
                  setState('default');
                }}
                className="w-full text-sm text-brand-primary hover:underline"
              >
                Use a different email
              </button>
            </form>
          </div>
        )}

        {/* Generic Error State */}
        {state === 'error' && (
          <div className="space-y-6 text-center">
            <h2 className="text-[28px] font-serif">Something went wrong</h2>
            <p className="text-base text-ink/70 leading-relaxed">{error}</p>

            <button
              onClick={() => setState('default')}
              className="w-full h-14 bg-ink text-white rounded-[14px] text-lg font-medium hover:bg-brand-primary transition-colors"
            >
              Try again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
