import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { notifyWebhook } from '../lib/webhook';

// Part 5 Section 11 - Footer
export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { openModal } = useModal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    notifyWebhook({ email });

    setSubmitted(true);
  };

  return (
    <footer className="bg-soft-surface border-t border-hairline">
      <div className="max-w-[1120px] mx-auto px-5 md:px-12 lg:px-20 py-16 md:py-20 pb-8 md:pb-12">
        {/* PART 1 - Founder Contact Band */}
        <div className="max-w-[640px] mx-auto mb-12">
          {/* Logo */}
          <div className="text-2xl font-bold text-ink text-center mb-6">
            JobOrders
          </div>

          {/* Founder note */}
          <p className="text-base text-[#4A5568] leading-relaxed text-center max-w-[480px] mx-auto mb-6">
            Built by a solo founder for the recruiters I want to work with. Reply to any email, or reach me directly:
          </p>

          {/* LinkedIn link */}
          <div className="flex items-center justify-center mb-8">
            <a
              href="https://www.linkedin.com/in/na-wu-2912243a1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group"
            >
              {/* LinkedIn icon */}
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="#0B0F19">
                <path d="M17.04 17.043h-2.962v-4.64c0-1.107-.022-2.531-1.542-2.531-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54 3.004 0 3.556 1.977 3.556 4.545v5.238zM4.447 6.194c-.954 0-1.72-.776-1.72-1.729 0-.953.766-1.729 1.72-1.729.95 0 1.72.776 1.72 1.729 0 .953-.77 1.729-1.72 1.729zm1.484 10.85h-2.97V7.5h2.97v9.543zM18.521 0H1.476C.66 0 0 .645 0 1.44v17.12C0 19.355.66 20 1.476 20h17.045c.815 0 1.479-.645 1.479-1.44V1.44C20 .645 19.336 0 18.521 0z"/>
              </svg>
              <span className="text-base font-medium text-ink group-hover:underline">
                LinkedIn
              </span>
            </a>
          </div>

          {/* Divider with OR */}
          <div className="flex items-center gap-4 max-w-[480px] mx-auto my-8">
            <div className="flex-1 h-px bg-hairline"></div>
            <span className="text-[13px] uppercase tracking-[1.5px] text-[#9CA3AF]">OR</span>
            <div className="flex-1 h-px bg-hairline"></div>
          </div>

          {/* Drop a note form */}
          <div className="max-w-[480px] mx-auto">
            <div className="text-[13px] uppercase tracking-[1.5px] text-[#6B7280] text-center mb-4">
              DROP A NOTE
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-stretch">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@youragency.com"
                  required
                  className="flex-1 sm:w-[360px] h-12 px-4 rounded-xl border border-hairline text-base text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary"
                />
                <button
                  type="submit"
                  className="h-12 px-6 rounded-xl bg-ink text-white text-base font-medium hover:bg-brand-primary transition-colors inline-flex items-center justify-center gap-2"
                >
                  Send <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <p className="text-base italic text-[#4A5568] text-center">
                Thanks — I'll personally reply within 24 hours. — Na
              </p>
            )}
          </div>
        </div>

        {/* PART 2 - Compact link row */}
        <div className="border-t border-hairline pt-8 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[640px] mx-auto">
            {/* Column 1 - PRODUCT */}
            <div>
              <h4 className="text-[13px] uppercase tracking-[1.5px] text-[#6B7280] mb-3">PRODUCT</h4>
              <div className="space-y-2">
                <div>
                  <a href="/#how" className="text-[15px] text-ink hover:text-brand-primary transition-colors">
                    How it works
                  </a>
                </div>
                <div>
                  <Link to="/sample" className="text-[15px] text-ink hover:text-brand-primary transition-colors">
                    Sample digest
                  </Link>
                </div>
                <div>
                  <a href="/#pricing" className="text-[15px] text-ink hover:text-brand-primary transition-colors">
                    Pricing
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2 - RESERVE */}
            <div>
              <h4 className="text-[13px] uppercase tracking-[1.5px] text-[#6B7280] mb-3">RESERVE</h4>
              <div className="space-y-2">
                <div>
                  <button
                    onClick={() => openModal('founding')}
                    className="text-[15px] text-ink hover:text-brand-primary transition-colors text-left"
                  >
                    Founding 50 waitlist
                  </button>
                </div>
                <div>
                  <a href="/#faq" className="text-[15px] text-ink hover:text-brand-primary transition-colors">
                    FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PART 3 - Copyright */}
        <div className="border-t border-hairline pt-6">
          <p className="text-sm text-[#6B7280] text-center">
            © 2026 JobOrders. Built for recruiters who'd rather close than search.
          </p>
        </div>
      </div>
    </footer>
  );
}
