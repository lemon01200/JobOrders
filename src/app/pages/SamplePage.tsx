import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowRight, X, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';
import SampleDigest from '../components/SampleDigest';
import { useModal } from '../context/ModalContext';

// Part 6 - /sample Landing Page
export default function SamplePage() {
  const [selectedNiche, setSelectedNiche] = useState('tech');
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [ctaDismissed, setCtaDismissed] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    // Check if CTA was dismissed in this session
    const dismissed = sessionStorage.getItem('samplePageCtaDismissed');
    if (dismissed) {
      setCtaDismissed(true);
    }

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 60 && !dismissed) {
        setShowStickyCTA(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismissCTA = () => {
    setCtaDismissed(true);
    setShowStickyCTA(false);
    sessionStorage.setItem('samplePageCtaDismissed', 'true');
  };

  return (
    <div className="min-h-screen bg-surface">
      {/* Redesigned Context Bar */}
      <div className="sticky top-[72px] z-40 bg-[#EFF4FF] border-b border-brand-primary/20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-12 lg:px-20 h-10 flex items-center justify-between">
          <Link to="/" className="text-sm text-brand-primary hover:underline inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <p className="text-sm text-brand-primary text-center flex-1">
            This is a real sample digest. Yours will be tailored.
          </p>
          <div className="w-24"></div> {/* Spacer for center alignment */}
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-4xl mx-auto px-5 md:px-12 lg:px-20 py-12 md:py-16">
        <h1 className="text-3xl md:text-5xl mb-6">
          Here's what lands in your inbox at 7:30 AM.
        </h1>
        <p className="text-lg text-ink/70 leading-relaxed mb-8">
          Below is a real digest sent to a recruiter who specializes in Senior Backend / Platform roles
          at Series B–C SaaS companies. Names anonymized, signals real.
        </p>

        {/* Niche Switcher */}
        <div className="mb-8">
          <p className="text-sm text-ink/60 mb-3">See a sample for:</p>
          <div className="flex gap-3">
            <button
              onClick={() => setSelectedNiche('tech')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedNiche === 'tech'
                  ? 'bg-brand-primary text-white'
                  : 'bg-soft-surface text-ink hover:bg-hairline'
              }`}
            >
              Tech
            </button>
            <button
              onClick={() => setSelectedNiche('sales')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedNiche === 'sales'
                  ? 'bg-brand-primary text-white'
                  : 'bg-soft-surface text-ink hover:bg-hairline'
              }`}
            >
              Sales
            </button>
            <button
              onClick={() => setSelectedNiche('finance')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedNiche === 'finance'
                  ? 'bg-brand-primary text-white'
                  : 'bg-soft-surface text-ink hover:bg-hairline'
              }`}
            >
              Finance
            </button>
          </div>
        </div>
      </div>

      {/* Full Sample Digest */}
      <div className="max-w-3xl mx-auto px-5 md:px-12 mb-16">
        <div className="bg-surface border border-hairline rounded-lg shadow-lg overflow-hidden">
          <SampleDigest showHeader={true} />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-3xl mx-auto px-5 md:px-12 py-16 text-center">
        <h2 className="text-2xl md:text-3xl mb-4">
          "Wait — this is what I get every morning?"
        </h2>
        <p className="text-lg text-ink/70 mb-8">
          Yes. Your first digest lands the day we launch.
        </p>
        <Button size="lg" onClick={() => openModal('founding')}>
          Lock in $99/mo for life <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Inline FAQ */}
      <div className="max-w-3xl mx-auto px-5 md:px-12 py-16 border-t border-hairline">
        <h3 className="text-xl font-semibold mb-8">Common questions about the digest</h3>
        <div className="space-y-1">
          <FAQItem
            question="How is win rate calculated?"
            answer="A blend of 6 signals: JD freshness, ATS source quality, salary level, company stage, hiring-manager signals (recent posts / new exec), and competition (agency reposts detected). Calibrated against actual placements made by JobOrders users."
          />
          <FAQItem
            question="Where do dark opportunities come from?"
            answer="Funding announcements (Crunchbase), executive moves on LinkedIn, and team-growth signals across 5,000+ tracked companies. We surface them ~6 weeks before the JD goes live."
          />
          <FAQItem
            question="What if my niche isn't tech?"
            answer="JobOrders works for any high-fee desk: Sales, Finance, Healthcare, Legal, Marketing, Executive Search. The narrower your niche, the better we get."
          />
          <FAQItem
            question="How fresh are the JDs really?"
            answer="Median JD age in last week's digests: 11 hours. 92% of #1-ranked JDs are under 24 hours old when delivered."
          />
        </div>
      </div>

      {/* Scroll-triggered Sticky Bottom CTA */}
      {showStickyCTA && !ctaDismissed && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-ink shadow-2xl animate-in slide-in-from-bottom duration-200">
          <div className="max-w-[1120px] mx-auto px-5 md:px-12 lg:px-20 h-14 md:h-16 flex items-center justify-between gap-4">
            <p className="text-sm md:text-base text-white/85 hidden sm:block">
              Want yours tailored to your niche?
            </p>
            <p className="text-sm text-white/85 sm:hidden">
              Reserve your tailored digest
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => openModal('founding')}
                className="h-11 px-6 rounded-lg bg-founding-yellow text-ink font-semibold text-sm md:text-base hover:brightness-110 transition-all inline-flex items-center gap-2 whitespace-nowrap"
              >
                Reserve my seat <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleDismissCTA}
                className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group border-b border-hairline py-4 cursor-pointer">
      <summary className="flex justify-between items-center list-none">
        <span className="font-semibold pr-8">{question}</span>
        <span className="text-xl group-open:rotate-90 transition-transform">▸</span>
      </summary>
      <div className="mt-3 text-ink/70 leading-relaxed pr-8 text-sm">
        {answer}
      </div>
    </details>
  );
}
