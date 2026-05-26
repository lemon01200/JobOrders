import { Link } from 'react-router';
import Button from './Button';
import { useModal } from '../context/ModalContext';
import { FOUNDING_SEATS_LEFT } from '../config';
import { ArrowRight } from 'lucide-react';

interface NavigationProps {
  hideFoundingBanner?: boolean;
}

export default function Navigation({ hideFoundingBanner = false }: NavigationProps) {
  const { openModal } = useModal();

  return (
    <>
      {/* Founding 50 Banner - Part 5 Section 1 */}
      {!hideFoundingBanner && (
        <div className="bg-founding-yellow border-b border-founding-yellow/30">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12 lg:px-20 h-12 flex items-center justify-center text-sm md:text-base gap-2">
          {/* Ticket SVG icon */}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="flex-shrink-0">
            <path d="M2 3C1.44772 3 1 3.44772 1 4V6.5C1.82843 6.5 2.5 7.17157 2.5 8C2.5 8.82843 1.82843 9.5 1 9.5V12C1 12.5523 1.44772 13 2 13H14C14.5523 13 15 12.5523 15 12V9.5C14.1716 9.5 13.5 8.82843 13.5 8C13.5 7.17157 14.1716 6.5 15 6.5V4C15 3.44772 14.5523 3 14 3H2Z"/>
          </svg>
          <span className="font-semibold">Founding 50 waitlist: first 50 sign-ups lock in $99/mo for life. {FOUNDING_SEATS_LEFT} seats left.</span>
          <button onClick={() => openModal('founding')} className="text-ink hover:underline inline-flex items-center gap-1">
            Reserve a seat <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      )}

      {/* Main Navigation */}
      <nav className="bg-surface border-b border-hairline sticky top-0 z-50">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12 lg:px-20 h-[72px] flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-ink">
            JobOrders
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how" className="text-ink/70 hover:text-ink transition-colors">
              How
            </a>
            <a href="#why" className="text-ink/70 hover:text-ink transition-colors">
              Why
            </a>
            <a href="#pricing" className="text-ink/70 hover:text-ink transition-colors">
              Pricing
            </a>
            <Link to="/sample" className="text-ink/70 hover:text-ink transition-colors">
              Sample digest
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => openModal('founding')} className="text-ink/70 hover:text-ink transition-colors">
              Resend confirmation
            </button>
            <Button size="md" onClick={() => openModal('founding')}>
              Reserve seat <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
