import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import Button from '../components/Button';
import SectionContainer from '../components/SectionContainer';
import SampleDigest from '../components/SampleDigest';
import WinRateBadge from '../components/WinRateBadge';
import MobileStickyCTA from '../components/MobileStickyCTA';
import { useModal } from '../context/ModalContext';
import { FOUNDING_SEATS_LEFT } from '../config';

export default function HomePage() {
  const { openModal } = useModal();

  return (
    <div className="min-h-screen">
      <MobileStickyCTA />
      {/* Section 1 - Hero */}
      <SectionContainer background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Copy */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-tight max-w-[720px]">
              Pre-vetted job orders in your inbox{' '}
              <span className="italic text-brand-secondary font-serif font-semibold">
                before your competitors finish their coffee.
              </span>
            </h1>

            <p className="text-lg leading-relaxed text-ink/80 max-w-2xl">
              JobOrders is the AI-powered BD engine built for independent recruiters and boutique agencies.
              From launch day forward, every weekday at 7:30 AM you'll get 5 high-win-rate job orders — scored, ranked, and ready to call.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" onClick={() => openModal('founding')}>
                Reserve my seat
              </Button>
              <Link to="/sample">
                <Button variant="secondary" size="lg">
                  See a sample morning digest <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <p className="text-sm text-ink/60 pt-2">
              No payment now · Locked at $99/mo for life · Founding 50 closes at 50
            </p>
          </div>

          {/* Right column - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="w-full max-w-[400px] bg-surface rounded-[32px] border-8 border-ink/20 overflow-hidden"
              style={{
                transform: 'rotate(6deg)',
                boxShadow: '0 24px 48px rgba(11, 15, 25, 0.12)'
              }}
            >
              {/* Phone notch */}
              <div className="bg-ink h-6 w-32 mx-auto rounded-b-2xl"></div>

              {/* Digest content - scrollable */}
              <div className="h-[600px] overflow-y-auto">
                <SampleDigest showHeader={true} />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Section 2 - Pain Agitation */}
      <SectionContainer background="soft">
        {/* Eyebrow */}
        <div className="text-[13px] uppercase tracking-widest text-ink/60 text-center mb-4">
          THE PROBLEM
        </div>

        <h2 className="text-3xl md:text-4xl text-center mb-16">Sound familiar?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
          {/* Card 1 - Time wasted */}
          <div className="flex flex-col items-center text-center max-w-[320px] mx-auto p-8">
            {/* Wall clock icon */}
            <svg className="w-16 h-16 mb-6" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="32" cy="32" r="24" />
              <path d="M32 16 L32 32 L42 38" />
              <circle cx="32" cy="32" r="2" fill="currentColor" />
            </svg>

            <h3 className="text-xl font-semibold mb-3">3 hours a day, gone.</h3>
            <p className="text-ink/70 leading-relaxed">
              Every morning you scan LinkedIn, Indeed, ZipRecruiter — hunting for fresh JDs,
              copy-pasting into spreadsheets, guessing which company is worth a cold call.
            </p>
          </div>

          {/* Card 2 - Already cold */}
          <div className="flex flex-col items-center text-center max-w-[320px] mx-auto p-8">
            {/* Alarm clock icon */}
            <svg className="w-16 h-16 mb-6" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="32" cy="34" r="20" />
              <path d="M32 22 L32 34 L40 34" />
              {/* Alarm bells */}
              <path d="M14 26 L10 22" />
              <path d="M50 26 L54 22" />
              {/* Legs */}
              <path d="M20 52 L16 56" />
              <path d="M44 52 L48 56" />
            </svg>

            <h3 className="text-xl font-semibold mb-3">By the time you find it, it's already cold.</h3>
            <p className="text-ink/70 leading-relaxed">
              The best job orders get flooded within 48 hours. By day 3, the hiring manager has already talked to 12 other recruiters.
            </p>
          </div>

          {/* Card 3 - Noise */}
          <div className="flex flex-col items-center text-center max-w-[320px] mx-auto p-8">
            {/* Trash bin icon */}
            <svg className="w-16 h-16 mb-6" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 18 L44 18" />
              <path d="M26 18 L26 14 L38 14 L38 18" />
              <path d="M22 22 L24 54 L40 54 L42 22 L22 22" />
              <path d="M28 28 L28 48" />
              <path d="M32 28 L32 48" />
              <path d="M36 28 L36 48" />
            </svg>

            <h3 className="text-xl font-semibold mb-3">LinkedIn Alerts are noise.</h3>
            <p className="text-ink/70 leading-relaxed">
              Generic keyword matches. Staffing-firm reposts. Roles 1,000 miles outside your niche.
              You've stopped opening them.
            </p>
          </div>
        </div>

        <div className="text-center text-2xl md:text-[28px] font-serif italic font-semibold text-ink/90 max-w-3xl mx-auto leading-relaxed">
          You don't need another job board.<br />
          You need someone to do BD for you while you sleep.
        </div>
      </SectionContainer>

      {/* Section 3 - Product */}
      <SectionContainer background="white" className="!pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left - Email frame */}
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="bg-soft-surface rounded-lg overflow-hidden border border-hairline shadow-lg">
                {/* Mail client header */}
                <div className="bg-soft-surface px-3 md:px-4 min-h-[32px] flex items-center text-[11px] md:text-[13px] text-ink/60 border-b border-hairline overflow-hidden">
                  <span className="hidden sm:inline mr-4 flex-shrink-0">From: digest@joborders.com</span>
                  <span className="truncate">Subject: 5 fresh orders for Sarah – May 26</span>
                </div>

                {/* Scrollable digest */}
                <div className="h-[600px] overflow-y-auto">
                  <SampleDigest showHeader={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Description */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-[13px] uppercase tracking-widest text-brand-secondary font-medium mb-4">
                WHAT SHOWS UP AT 7:30 AM
              </div>
              <h2 className="text-[40px] md:text-[44px] font-bold text-ink leading-tight mb-4">
                The day we launch, your inbox does the BD.
              </h2>
              <p className="text-lg md:text-xl text-[#4A5568] leading-relaxed">
                At 7:30 AM every weekday, 5 pre-vetted job orders land — win-rate scored, before your competitors finish their coffee.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {/* Feature 1 - Flame icon */}
              <div className="flex gap-4">
                <svg className="w-6 h-6 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="#FF6A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 C12 2, 8 6, 8 10 C8 12, 9 14, 12 14 C15 14, 16 12, 16 10 C16 6, 12 2, 12 2 Z" />
                  <path d="M12 14 C12 14, 10 16, 10 18 C10 20, 11 22, 12 22 C13 22, 14 20, 14 18 C14 16, 12 14, 12 14 Z" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-2">5 hand-picked job orders</h3>
                  <p className="text-ink/70 leading-relaxed">
                    — scored 0–100 on win rate, ranked by what you can actually close.
                  </p>
                </div>
              </div>

              {/* Feature 2 - Dollar coin icon */}
              <div className="flex gap-4">
                <svg className="w-6 h-6 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="#FF6A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M15 8 C15 8, 14 7, 12 7 C10 7, 9 8, 9 9 C9 10, 10 11, 12 11 C14 11, 15 12, 15 13 C15 14, 14 15, 12 15 C10 15, 9 14, 9 14" />
                  <path d="M12 6 L12 7" />
                  <path d="M12 15 L12 16" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-2">Commission value estimated</h3>
                  <p className="text-ink/70 leading-relaxed">
                    on every role. Never spend an hour on a $4k role again.
                  </p>
                </div>
              </div>

              {/* Feature 3 - Satellite dish icon */}
              <div className="flex gap-4">
                <svg className="w-6 h-6 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="#FF6A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12 C4 7.5, 7.5 4, 12 4" />
                  <path d="M7 12 C7 9.2, 9.2 7, 12 7" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M16 16 L12 12" />
                  <path d="M14 18 L16 16 L18 18" />
                  <path d="M16 20 L16 16" />
                </svg>
                <div>
                  <h3 className="font-semibold mb-2">Dark opportunities</h3>
                  <p className="text-ink/70 leading-relaxed">
                    — companies that just raised, just hired a VP, and will be posting JDs in 6 weeks.
                    Get in before the JD exists.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="italic text-base text-ink/60 mb-3">
                Or skip the demo — see a real one.
              </p>
              <Link to="/sample">
                <Button variant="secondary">
                  See a real digest <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Section 4 - How It Works */}
      <SectionContainer background="white" id="how">
        <h2 className="text-3xl md:text-4xl text-center mb-16">
          From signup to first call in 10 minutes.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {/* Step 1 */}
          <div className="relative">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white font-mono font-bold text-xl mb-4 shadow-lg">
              1
            </div>

            <h3 className="text-xl font-semibold mb-3">Tell us your niche</h3>
            <p className="text-ink/70 leading-relaxed">
              5-minute profile: industries, functions, seniority, geography, target company stage. Set once.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white font-mono font-bold text-xl mb-4 shadow-lg">
              2
            </div>

            <h3 className="text-xl font-semibold mb-3">We scan everything, every night</h3>
            <p className="text-ink/70 leading-relaxed">
              Greenhouse, Lever, Ashby, Indeed, 5,000+ VC-backed career pages, Crunchbase funding signals,
              and exec moves on LinkedIn.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white font-mono font-bold text-xl mb-4 shadow-lg">
              3
            </div>

            <h3 className="text-xl font-semibold mb-3">5 scored job orders land at 7:30 AM</h3>
            <p className="text-ink/70 leading-relaxed">
              Win-rate scored. Commission estimated. Agency reposts filtered. Duplicates merged. Ready to act on.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-primary text-white font-mono font-bold text-xl mb-4 shadow-lg">
              4
            </div>

            <h3 className="text-xl font-semibold mb-3">One click → outreach email drafted</h3>
            <p className="text-ink/70 leading-relaxed">
              Tap "Generate cold email," tweak, send. From discovery to outreach in 10 minutes.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Section 5 - Why JobOrders (Comparison) */}
      <SectionContainer background="white" id="why">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="text-[13px] uppercase tracking-[1.5px] text-brand-secondary text-center mb-4">
            THE COMPARISON
          </div>

          <h2 className="text-3xl md:text-4xl text-center mb-4">
            Your current BD workflow vs. JobOrders
          </h2>
          <p className="text-center text-ink/70 mb-12 text-lg">
            We're not competing with another tool. We're competing with the 3 hours you spend hunting every morning.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-t border-b border-hairline">
              <thead>
                <tr className="border-b-2 border-hairline">
                  <th className="text-left py-3 px-4 font-semibold"></th>
                  <th className="text-left py-3 px-4 font-semibold">
                    <span className="text-[#9CA3AF] mr-1.5">✕</span>
                    Doing it yourself today
                  </th>
                  <th className="text-left py-3 px-4 font-semibold bg-brand-primary/5">
                    <span className="text-brand-primary mr-1.5">✦</span>
                    With JobOrders
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-hairline">
                  <td className="py-3 px-4 font-medium">Time per week on BD discovery</td>
                  <td className="py-3 px-4 text-[#6B7280]">3–5 hours</td>
                  <td className="py-3 px-4 bg-brand-primary/5">
                    10 min/day <svg className="w-4 h-4 ml-2 inline-block" viewBox="0 0 16 16" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8 L6 11 L13 4" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-3 px-4 font-medium">Avg. age of JD when you find it</td>
                  <td className="py-3 px-4 text-[#6B7280]">3–5 days (already cold)</td>
                  <td className="py-3 px-4 bg-brand-primary/5">
                    &lt; 24 hours (most under 12h) <svg className="w-4 h-4 ml-2 inline-block" viewBox="0 0 16 16" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8 L6 11 L13 4" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-3 px-4 font-medium">How you decide who to call</td>
                  <td className="py-3 px-4 text-[#6B7280]">Gut feel</td>
                  <td className="py-3 px-4 bg-brand-primary/5">
                    Win-rate score + commission value <svg className="w-4 h-4 ml-2 inline-block" viewBox="0 0 16 16" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8 L6 11 L13 4" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-3 px-4 font-medium">Dark opportunities (pre-JD)</td>
                  <td className="py-3 px-4 text-[#6B7280]">Invisible</td>
                  <td className="py-3 px-4 bg-brand-primary/5">
                    Flagged 3–6 months early <svg className="w-4 h-4 ml-2 inline-block" viewBox="0 0 16 16" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8 L6 11 L13 4" />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="py-3 px-4 font-medium">Staffing-firm repost noise</td>
                  <td className="py-3 px-4 text-[#6B7280]">Everywhere</td>
                  <td className="py-3 px-4 bg-brand-primary/5">
                    Auto-filtered <svg className="w-4 h-4 ml-2 inline-block" viewBox="0 0 16 16" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8 L6 11 L13 4" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Cost</td>
                  <td className="py-3 px-4 text-[#6B7280]">~$12–16k/year in opportunity cost</td>
                  <td className="py-3 px-4 bg-brand-primary/5">
                    <span className="font-semibold text-ink">$99/mo for life (Founding)</span>
                    <span className="text-[#6B7280]"> · $199/mo after</span>
                    <svg className="w-4 h-4 ml-2 inline-block" viewBox="0 0 16 16" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 8 L6 11 L13 4" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Time-saved callout */}
          <div className="mt-12 mb-12 max-w-[720px] mx-auto">
            <div className="bg-soft-surface border border-hairline rounded-2xl px-6 py-6 md:px-10 md:py-8">
              <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8">
                {/* Left column - Big number */}
                <div className="text-center md:text-left md:w-[40%]">
                  <div className="font-mono font-semibold text-[40px] md:text-[56px] leading-none text-brand-secondary">
                    158 hrs/yr
                  </div>
                  <div className="text-[13px] uppercase tracking-[1.5px] text-[#6B7280] mt-2">
                    back in your week
                  </div>
                </div>

                {/* Right column - Explainer */}
                <div className="text-left md:w-[60%]">
                  <div className="text-[12px] uppercase tracking-[1.5px] text-brand-secondary mb-3">
                    DO THE MATH
                  </div>
                  <div className="text-[15px] leading-relaxed text-ink">
                    DIY: 3–5 hrs/week scanning LinkedIn and Indeed = ~200 hrs/year.<br />
                    JobOrders: 10 min/day skimming the digest = ~42 hrs/year.<br />
                    Net: 158 hours back. That's <span className="font-semibold text-brand-secondary">4 full weeks of selling time.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-[26px] leading-tight text-ink font-serif italic font-semibold max-w-[720px] mx-auto">
            If JobOrders helps you close <span className="text-brand-secondary">one extra placement per year</span>,
            it pays for itself <span className="text-brand-secondary">10× over.</span>
          </p>
        </div>
      </SectionContainer>

      {/* Section 6 - Dark Opportunities Moat */}
      <SectionContainer background="purple" className="!pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Dark Opp cards */}
          <div className="space-y-6">
            {/* Card A */}
            <div className="relative backdrop-blur-md bg-[rgba(124,58,237,0.12)] border border-[rgba(124,58,237,0.4)] rounded-lg p-6 space-y-4 group hover:border-dark-opp-purple transition-all duration-200" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}>
              {/* Hover arrow */}
              <div className="absolute top-6 right-6 opacity-40 group-hover:opacity-100 transition-opacity duration-200">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3 L11 8 L6 13" />
                </svg>
              </div>

              {/* Freshness badge */}
              <div className="absolute top-6 right-12 flex items-center gap-1.5 font-mono text-[11px] text-brand-secondary">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse"></span>
                <span>LIVE · today</span>
              </div>

              <div className="flex items-center gap-2">
                {/* Radar pulse icon */}
                <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 14 14" fill="none" stroke="#FF6A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7 C3 5, 5 3, 7 3" className="animate-pulse" style={{ animationDuration: '2s' }} />
                  <path d="M1.5 7 C1.5 3.5, 3.5 1.5, 7 1.5" />
                  <path d="M4.5 7 C4.5 5.5, 5.5 4.5, 7 4.5" />
                  <circle cx="7" cy="7" r="1.5" fill="#FF6A2C" />
                </svg>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-secondary">
                  DARK OPPORTUNITY
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  DataCo just hired a new VP of Engineering (ex-Stripe)
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Predicted engineering hiring wave: 3–6 months.<br />
                  Build the relationship now — before the JD goes live.
                </p>
              </div>

              {/* Timeline visualization */}
              <div className="pt-4 border-t border-white/10">
                <div className="relative h-8">
                  {/* Timeline line */}
                  <div className="absolute top-4 left-0 right-0 h-[1px] bg-gradient-to-r from-dark-opp-purple to-white/20"></div>

                  {/* Left endpoint - TODAY */}
                  <div className="absolute left-0 top-2">
                    <div className="flex flex-col items-start gap-1">
                      <div className="w-2 h-2 rounded-full bg-dark-opp-purple"></div>
                      <span className="font-mono text-[11px] text-white/70 whitespace-nowrap">TODAY · you reach out</span>
                    </div>
                  </div>

                  {/* Right endpoint - JD posts */}
                  <div className="absolute right-0 top-2">
                    <div className="flex flex-col items-end gap-1">
                      <div className="w-2 h-2 rounded-full border border-dark-opp-purple bg-transparent"></div>
                      <span className="font-mono text-[11px] text-white/70 whitespace-nowrap">JD posts (~6 weeks)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 opacity-0 hover:opacity-100 transition-opacity">
                <button className="px-3 py-1.5 text-xs bg-white/20 hover:bg-white/30 rounded transition-colors">
                  View company
                </button>
                <button className="px-3 py-1.5 text-xs bg-white/20 hover:bg-white/30 rounded transition-colors">
                  Draft intro email
                </button>
              </div>
            </div>

            {/* Card B */}
            <div className="relative backdrop-blur-md bg-[rgba(124,58,237,0.12)] border border-[rgba(124,58,237,0.4)] rounded-lg p-6 space-y-4 group hover:border-dark-opp-purple transition-all duration-200" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.06)' }}>
              {/* Hover arrow */}
              <div className="absolute top-6 right-6 opacity-40 group-hover:opacity-100 transition-opacity duration-200">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3 L11 8 L6 13" />
                </svg>
              </div>

              {/* Freshness badge */}
              <div className="absolute top-6 right-12 flex items-center gap-1.5 font-mono text-[11px] text-brand-secondary">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse"></span>
                <span>LIVE · 3 days ago</span>
              </div>

              <div className="flex items-center gap-2">
                {/* Radar pulse icon */}
                <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 14 14" fill="none" stroke="#FF6A2C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7 C3 5, 5 3, 7 3" className="animate-pulse" style={{ animationDuration: '2s' }} />
                  <path d="M1.5 7 C1.5 3.5, 3.5 1.5, 7 1.5" />
                  <path d="M4.5 7 C4.5 5.5, 5.5 4.5, 7 4.5" />
                  <circle cx="7" cy="7" r="1.5" fill="#FF6A2C" />
                </svg>
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-secondary">
                  DARK OPPORTUNITY
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Acme Inc raised $15M Series B (3 days ago)
                </h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Predicted Q3 hiring: Sales + Engineering.<br />
                  JD goes live in ~6 weeks. Cold outreach win-rate peaks now.
                </p>
              </div>

              {/* Timeline visualization */}
              <div className="pt-4 border-t border-white/10">
                <div className="relative h-8">
                  {/* Timeline line */}
                  <div className="absolute top-4 left-0 right-0 h-[1px] bg-gradient-to-r from-dark-opp-purple to-white/20"></div>

                  {/* Left endpoint - TODAY */}
                  <div className="absolute left-0 top-2">
                    <div className="flex flex-col items-start gap-1">
                      <div className="w-2 h-2 rounded-full bg-dark-opp-purple"></div>
                      <span className="font-mono text-[11px] text-white/70 whitespace-nowrap">TODAY · you reach out</span>
                    </div>
                  </div>

                  {/* Right endpoint - JD posts */}
                  <div className="absolute right-0 top-2">
                    <div className="flex flex-col items-end gap-1">
                      <div className="w-2 h-2 rounded-full border border-dark-opp-purple bg-transparent"></div>
                      <span className="font-mono text-[11px] text-white/70 whitespace-nowrap">JD posts (~6 weeks)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 opacity-0 hover:opacity-100 transition-opacity">
                <button className="px-3 py-1.5 text-xs bg-white/20 hover:bg-white/30 rounded transition-colors">
                  View company
                </button>
                <button className="px-3 py-1.5 text-xs bg-white/20 hover:bg-white/30 rounded transition-colors">
                  Draft intro email
                </button>
              </div>
            </div>
          </div>

          {/* Right - Description */}
          <div className="space-y-6">
            {/* Eyebrow */}
            <div className="text-[13px] uppercase tracking-[1.5px] text-brand-secondary">
              THE MOAT
            </div>

            <h2 className="text-3xl md:text-4xl">
              See the deal before there's a deal.
            </h2>
            <p className="text-lg leading-relaxed text-white/85">
              JobOrders monitors funding rounds, exec moves, and team-growth signals across 50,000+ companies.
              When a company is 6 weeks away from a hiring wave, you'll know — <span className="italic text-white">and your competitors won't.</span>
            </p>
            <p className="text-[40px] leading-tight italic font-serif font-semibold text-white/90 underline" style={{ textDecorationColor: 'rgba(255, 255, 255, 0.4)', textDecorationThickness: '0.5px' }}>
              This is the part no job board can replicate.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Section 7 - Built For */}
      <SectionContainer background="white">
        <h2 className="text-3xl md:text-4xl text-center mb-16">
          Built for the way you actually work.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1120px] mx-auto">
          {/* Solo recruiters */}
          <div className="bg-soft-surface border border-hairline rounded-2xl p-8 min-h-[240px] transition-colors duration-200 hover:border-ink group">
            {/* Icon - Solo recruiter with coffee */}
            <svg className="w-12 h-12 mb-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Person silhouette */}
              <circle cx="18" cy="12" r="6" />
              <path d="M8 40 C8 32 12 28 18 28 C24 28 28 32 28 40" />
              {/* Coffee cup */}
              <path d="M34 20 L34 30 C34 32 32 34 30 34 L38 34 C36 34 34 32 34 30" />
              <path d="M30 20 L38 20" />
              <path d="M31 16 L32 20" />
              <path d="M34 16 L34 20" />
              <path d="M37 16 L36 20" />
            </svg>

            <h3 className="font-serif text-[22px] text-ink mb-3">Solo recruiters</h3>
            <p className="text-base text-ink/70 leading-relaxed">
              You don't have a BD team. You <em>are</em> the BD team. JobOrders becomes your BD team.
            </p>
          </div>

          {/* Boutique agency owners */}
          <div className="bg-soft-surface border border-hairline rounded-2xl p-8 min-h-[240px] transition-colors duration-200 hover:border-ink group">
            {/* Icon - Three connected nodes */}
            <svg className="w-12 h-12 mb-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Three circles representing team members */}
              <circle cx="24" cy="12" r="5" />
              <circle cx="14" cy="32" r="5" />
              <circle cx="34" cy="32" r="5" />
              {/* Connection lines */}
              <path d="M22 16 L16 28" />
              <path d="M26 16 L32 28" />
              <path d="M19 32 L29 32" />
            </svg>

            <h3 className="font-serif text-[22px] text-ink mb-3">Boutique agency owners (2–5 people)</h3>
            <p className="text-base text-ink/70 leading-relaxed">
              Distribute leads across your team. Track who's working what.
              No more "did anyone call this account?"
            </p>
          </div>

          {/* Niche specialists */}
          <div className="bg-soft-surface border border-hairline rounded-2xl p-8 min-h-[240px] transition-colors duration-200 hover:border-ink group">
            {/* Icon - Target with arrow */}
            <svg className="w-12 h-12 mb-6" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {/* Target circles */}
              <circle cx="24" cy="24" r="16" />
              <circle cx="24" cy="24" r="11" />
              <circle cx="24" cy="24" r="6" />
              <circle cx="24" cy="24" r="2" />
              {/* Arrow */}
              <path d="M38 10 L28 20" />
              <path d="M38 10 L34 10" />
              <path d="M38 10 L38 14" />
            </svg>

            <h3 className="font-serif text-[22px] text-ink mb-3">Niche specialists</h3>
            <p className="text-base text-ink/70 leading-relaxed">
              The deeper your niche, the better we get. Train the AI on your sweet spot once;
              reap precision forever.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* Section 8 - Pricing */}
      <SectionContainer background="white" id="pricing">
        {/* Eyebrow */}
        <div className="text-[13px] uppercase tracking-[1.5px] text-brand-secondary text-center mb-4">
          THE MATH
        </div>

        <h2 className="text-3xl md:text-4xl text-center mb-4">
          One placement pays for the next 10 years.
        </h2>

        <p className="text-lg text-center text-[#4A5568] max-w-3xl mx-auto mb-12">
          Less than 1% of a single placement fee — and your price is locked at $99/mo for life.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Founding Card */}
          <div className="lg:col-span-7 border border-ink rounded-2xl p-8 space-y-6" style={{ boxShadow: '0 32px 64px rgba(11, 15, 25, 0.16)' }}>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="#0B0F19" className="flex-shrink-0">
                <path d="M2 3C1.44772 3 1 3.44772 1 4V6.5C1.82843 6.5 2.5 7.17157 2.5 8C2.5 8.82843 1.82843 9.5 1 9.5V12C1 12.5523 1.44772 13 2 13H14C14.5523 13 15 12.5523 15 12V9.5C14.1716 9.5 13.5 8.82843 13.5 8C13.5 7.17157 14.1716 6.5 15 6.5V4C15 3.44772 14.5523 3 14 3H2Z"/>
              </svg>
              <span className="uppercase tracking-wider">FOUNDING 50 · {FOUNDING_SEATS_LEFT} seats left</span>
            </div>

            <div>
              <div className="text-lg mb-2">JobOrders Pro · Founding</div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[120px] leading-none font-serif">$99</span>
                <span className="text-xl text-ink/60">/ month</span>
                <span className="font-mono text-2xl bg-founding-yellow text-ink px-2 py-1" style={{ borderRadius: '2px' }}>for life</span>
                <span className="text-2xl text-[#9CA3AF] line-through ml-2">$199</span>
              </div>
              <div className="text-sm text-ink/70 mt-3 leading-relaxed">
                No payment until we launch. You're reserving the price, not buying the product.
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <div className="font-semibold mb-3">Everything in Pro, plus:</div>
              <div className="flex gap-2 text-sm">
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8 L6 11 L13 4" />
                </svg>
                <span>Locked at $99/mo for life — even when public pricing hits $199</span>
              </div>
              <div className="flex gap-2 text-sm">
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8 L6 11 L13 4" />
                </svg>
                <span>No payment now — pay only when we launch</span>
              </div>
              <div className="flex gap-2 text-sm">
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8 L6 11 L13 4" />
                </svg>
                <span>Unsubscribe anytime</span>
              </div>
            </div>

            <div className="pt-4">
              <Button size="xl" className="w-full" onClick={() => openModal('founding')}>
                Lock in $99/mo for life
              </Button>

              {/* Updated trust line */}
              <div className="flex items-center justify-center gap-2 text-sm text-[#4A5568] mt-4">
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8 L6 11 L13 4" />
                </svg>
                <span>No payment now · We email you at launch · Magic link confirms your seat</span>
              </div>
            </div>
          </div>

          {/* ROI Card */}
          <div className="lg:col-span-5 bg-soft-surface rounded-lg p-8 space-y-6">
            {/* Testimonial */}
            <div className="pb-6 border-b border-hairline">
              <p className="text-lg italic font-serif text-ink mb-2">
                "Closed 2 placements in week 3. Paid for the entire year."
              </p>
              <p className="text-sm text-ink/60">
                — Marcus K., independent recruiter [PLACEHOLDER]
              </p>
            </div>

            {/* ROI Math */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Your ROI math</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-ink/70">Avg. placement fee</span>
                  <span className="font-mono font-semibold">$25,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink/70">JobOrders annual cost</span>
                  <span className="font-mono font-semibold">$2,388</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-hairline">
                  <span className="text-ink/70">Break-even</span>
                  <span className="font-mono font-semibold">~10% of one placement</span>
                </div>
              </div>
            </div>

            {/* ROI Bar Visualization */}
            <div className="space-y-2">
              <div className="flex justify-between text-[11px] font-mono text-ink/60 mb-1">
                <span>JobOrders ($2,388/yr)</span>
                <span>One placement ($25,000)</span>
              </div>
              <div className="w-full h-3 rounded-md overflow-hidden flex">
                <div className="bg-ink" style={{ width: '9%' }}></div>
                <div className="bg-hairline" style={{ width: '91%' }}></div>
              </div>
              <p className="text-sm text-ink/70 text-center pt-2">
                JobOrders is 10× cheaper than skipping a single placement
              </p>
            </div>

            {/* Link to sample */}
            <div className="pt-4">
              <Link to="/sample" className="text-base text-brand-primary hover:underline inline-flex items-center gap-1">
                See sample digest first <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Section 9 - Proof */}
      <SectionContainer background="soft">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Recruiters who already get their mornings back
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-6xl md:text-[96px] font-mono font-semibold text-brand-primary mb-2">
              3,247
            </div>
            <div className="text-ink/60">JDs per week</div>
          </div>
          <div>
            <div className="text-6xl md:text-[96px] font-mono font-semibold text-brand-primary mb-2">
              487
            </div>
            <div className="text-ink/60">dark opps</div>
          </div>
          <div>
            <div className="text-6xl md:text-[96px] font-mono font-semibold text-brand-primary mb-2">
              11h
            </div>
            <div className="text-ink/60">median JD age</div>
          </div>
        </div>
      </SectionContainer>

      {/* Section 10 - FAQ */}
      <SectionContainer background="white" id="faq">
        <h2 className="text-3xl md:text-4xl text-center mb-12">
          Questions you're probably about to ask
        </h2>

        <div className="max-w-3xl mx-auto space-y-1">
          <FAQItem
            question="When does JobOrders actually launch?"
            answer="We're heads-down building. Reserving a Founding seat now means we email you the moment your first digest is ready to ship."
            defaultOpen
          />
          <FAQItem
            question="Do I pay anything now?"
            answer="No. Reserving a seat costs $0 and requires no credit card. You're reserving the price ($99/mo for life), not buying the product yet. We'll send a magic link to activate billing only when the product launches."
          />
          <FAQItem
            question="How is this different from LinkedIn Recruiter or Indeed?"
            answer="Those tools help you find candidates. JobOrders finds clients. Completely different job."
          />
          <FAQItem
            question="Where do you source job orders from?"
            answer="Public ATS feeds (Greenhouse, Lever, Ashby), 5,000+ company career pages, major job boards, plus funding signals from Crunchbase and exec-move signals on LinkedIn."
          />
          <FAQItem
            question="Won't my competitors see the same job orders?"
            answer="The JDs are public. The edge is speed and scoring. You see them within hours of going live, ranked for your niche, before most recruiters even open their laptop."
          />
          <FAQItem
            question="What if my niche is super specific?"
            answer="The narrower, the better. The AI learns from your 'following up' and 'not for me' feedback, so precision compounds week over week."
          />
          <FAQItem
            question="Can I unsubscribe anytime?"
            answer="Yes. Month-to-month. No contracts. One click in settings. Unsubscribe anytime."
          />
          <FAQItem
            question="Do you filter out staffing-firm reposts?"
            answer="Aggressively. Agency-posted JDs are useless to you, so they never hit your inbox."
          />
          <FAQItem
            question="Does this work outside tech?"
            answer="Yes. Sales, Finance, Healthcare, Legal, Marketing, Executive Search — anywhere placement fees are $15k+."
          />
        </div>
      </SectionContainer>

      {/* Section 11 - Final CTA */}
      <SectionContainer background="purple">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl">
            Reserve your Founding seat before pricing doubles.
          </h2>
          <p className="text-xl md:text-2xl italic font-serif">
            First 50 sign-ups lock in $99/mo for life. Pay nothing until launch.
          </p>
          <div className="pt-4">
            <Button size="xl" onClick={() => openModal('founding')}>
              Claim seat #{50 - FOUNDING_SEATS_LEFT + 1} of 50 <ArrowRight className="w-5 h-5" />
            </Button>
            <p className="text-sm text-white/70 mt-4">
              No payment now · Locked at $99/mo for life · Magic link at launch
            </p>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  return (
    <details
      className="group border-b border-hairline py-5 cursor-pointer"
      open={defaultOpen}
    >
      <summary className="flex justify-between items-center list-none">
        <span className="font-semibold pr-8">{question}</span>
        <span className="text-xl group-open:rotate-90 transition-transform">▸</span>
      </summary>
      <div className="mt-4 text-ink/70 leading-relaxed pr-8">
        {answer}
      </div>
    </details>
  );
}
