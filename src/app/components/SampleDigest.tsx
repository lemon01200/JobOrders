import WinRateBadge from './WinRateBadge';
import { cn } from '../lib/utils';

interface DigestProps {
  className?: string;
  showHeader?: boolean;
}

// Part 7 - Sample Digest Email (rendered content)
export default function SampleDigest({ className, showHeader = true }: DigestProps) {
  return (
    <div className={cn('bg-surface text-ink font-sans', className)}>
      {showHeader && (
        <>
          <div className="border-b border-hairline py-3 px-4 text-center text-sm text-ink/60">
            JobOrders · Tuesday, May 26 · Tailored for Sarah
          </div>
          <div className="border-b border-hairline py-6 px-4 space-y-2">
            <div className="text-lg">☕ Good morning, Sarah.</div>
            <div className="text-base text-ink/70 leading-relaxed">
              5 new job orders matched your niche overnight.<br />
              1 dark opportunity is heating up.<br />
              Estimated time to work this list: 12 minutes.
            </div>
          </div>
        </>
      )}

      {/* Job Order #1 */}
      <div className="border-b border-hairline px-4 py-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <span className="text-sm font-mono font-semibold">#1</span>
          </div>
          <WinRateBadge score={87} />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Senior Go Engineer</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            Series B SaaS · 120 employees · Remote-first (US)<br />
            Posted 9 hours ago via Greenhouse
          </p>
        </div>

        <div className="space-y-1.5 text-sm">
          <div className="flex gap-2">
            <span className="text-ink/60 w-36">Salary band:</span>
            <span className="font-mono">$170k – $200k</span>
          </div>
          <div className="flex gap-2">
            <span className="text-ink/60 w-36">Your fee (20%):</span>
            <span className="font-mono font-semibold">$34,000 – $40,000</span>
          </div>
          <div className="flex gap-2">
            <span className="text-ink/60 w-36">Hiring urgency:</span>
            <span>2 roles open · backfill + growth</span>
          </div>
          <div className="flex gap-2">
            <span className="text-ink/60 w-36">HM signal:</span>
            <span>New Eng Director hired Apr 14</span>
          </div>
          <div className="flex gap-2">
            <span className="text-ink/60 w-36">Competition:</span>
            <span>Low — no agency reposts detected</span>
          </div>
        </div>

        <div className="pt-2">
          <div className="text-sm font-semibold mb-2">Why it scored 87:</div>
          <div className="space-y-1 text-sm text-ink/80">
            <div className="flex gap-2">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8 L6 11 L13 4" />
              </svg>
              <span>Direct ATS posting (no agency middleman)</span>
            </div>
            <div className="flex gap-2">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8 L6 11 L13 4" />
              </svg>
              <span>Stack matches your profile (Go, AWS, K8s)</span>
            </div>
            <div className="flex gap-2">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8 L6 11 L13 4" />
              </svg>
              <span>Series B + new Eng leader = open to vendors</span>
            </div>
            <div className="flex gap-2">
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 16 16" fill="none" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8 L6 11 L13 4" />
              </svg>
              <span>Posted &lt; 12h, you're likely first to call</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <button className="px-3 py-1.5 text-xs bg-ink/5 hover:bg-ink/10 rounded transition-colors">
            View full JD
          </button>
          <button className="px-3 py-1.5 text-xs bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary rounded transition-colors">
            Generate cold email
          </button>
          <button className="px-3 py-1.5 text-xs bg-ink/5 hover:bg-ink/10 rounded transition-colors">
            Mark as following up
          </button>
          <button className="px-3 py-1.5 text-xs text-ink/60 hover:text-ink/80 transition-colors">
            Not for me
          </button>
        </div>
      </div>

      {/* Job Order #2 */}
      <div className="border-b border-hairline px-4 py-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <span className="text-sm font-mono font-semibold">#2</span>
          </div>
          <WinRateBadge score={81} />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Staff Backend Engineer</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            Series C Fintech · 340 employees · NYC / Hybrid<br />
            Posted 14 hours ago via Lever
          </p>
        </div>

        <div className="space-y-1.5 text-sm">
          <div className="flex gap-2">
            <span className="text-ink/60 w-36">Salary band:</span>
            <span className="font-mono">$190k – $230k</span>
          </div>
          <div className="flex gap-2">
            <span className="text-ink/60 w-36">Your fee (20%):</span>
            <span className="font-mono font-semibold">$38,000 – $46,000</span>
          </div>
          <div className="flex gap-2">
            <span className="text-ink/60 w-36">HM signal:</span>
            <span>VP Eng posted on LinkedIn "we're hiring aggressively in Q3"</span>
          </div>
          <div className="flex gap-2">
            <span className="text-ink/60 w-36">Competition:</span>
            <span>Medium — 1 agency repost detected</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1.5 text-xs bg-ink/5 hover:bg-ink/10 rounded transition-colors">
            View full JD
          </button>
          <button className="px-3 py-1.5 text-xs bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary rounded transition-colors">
            Generate cold email
          </button>
        </div>
      </div>

      {/* Job Order #3 */}
      <div className="border-b border-hairline px-4 py-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            <span className="text-sm font-mono font-semibold">#3</span>
          </div>
          <WinRateBadge score={74} />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Senior Platform Engineer</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            Late-stage startup · 800 employees · Remote (US)<br />
            Posted 22 hours ago via Ashby
          </p>
        </div>

        <div className="space-y-1.5 text-sm">
          <div className="flex gap-2">
            <span className="text-ink/60 w-36">Salary band:</span>
            <span className="font-mono">$180k – $210k</span>
          </div>
          <div className="flex gap-2">
            <span className="text-ink/60 w-36">Your fee (20%):</span>
            <span className="font-mono font-semibold">$36,000 – $42,000</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1.5 text-xs bg-ink/5 hover:bg-ink/10 rounded transition-colors">
            View full JD
          </button>
          <button className="px-3 py-1.5 text-xs bg-brand-primary/10 hover:bg-brand-primary/20 text-brand-primary rounded transition-colors">
            Generate cold email
          </button>
        </div>
      </div>

      {/* Dark Opportunity */}
      <div className="border-2 border-dark-opp-purple bg-dark-opp-purple/5 px-4 py-6 space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">📡</span>
          <span className="text-sm font-semibold uppercase tracking-wider text-dark-opp-purple">
            DARK OPPORTUNITY · 1 new signal
          </span>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Northwind AI just raised $22M Series B</h3>
          <p className="text-sm text-ink/70 leading-relaxed">
            Announced 2 days ago · TechCrunch<br />
            Stage: Series B · 60 employees · SF + Remote
          </p>
        </div>

        <div className="space-y-3">
          <div>
            <div className="text-sm font-semibold mb-1.5">Predicted hiring wave:</div>
            <div className="space-y-1 text-sm text-ink/80">
              <div>→ Engineering: 8–12 hires over next 90 days</div>
              <div>→ Sales: starts ~6 weeks out</div>
              <div>→ Window for cold outreach: opens NOW, peaks in ~2 weeks, closes when JDs go live</div>
            </div>
          </div>

          <div className="text-sm font-serif italic text-ink/80 pt-2 border-t border-dark-opp-purple/20">
            You'll have the conversation while every other recruiter is still waiting for the JD.
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1.5 text-xs bg-dark-opp-purple/10 hover:bg-dark-opp-purple/20 text-dark-opp-purple rounded transition-colors">
            View company brief
          </button>
          <button className="px-3 py-1.5 text-xs bg-dark-opp-purple/10 hover:bg-dark-opp-purple/20 text-dark-opp-purple rounded transition-colors">
            Draft intro email to founder/VP Eng
          </button>
          <button className="px-3 py-1.5 text-xs bg-ink/5 hover:bg-ink/10 rounded transition-colors">
            Add to my watchlist
          </button>
        </div>
      </div>

      {/* Weekly Stats */}
      <div className="border-t border-hairline px-4 py-6">
        <div className="text-sm font-semibold mb-3">📊 Your week so far</div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <div className="text-ink/60">Job orders delivered:</div>
            <div className="font-mono font-semibold text-lg">18</div>
          </div>
          <div>
            <div className="text-ink/60">Marked as following up:</div>
            <div className="font-mono font-semibold text-lg">4</div>
          </div>
          <div>
            <div className="text-ink/60">Avg. win rate of follow-ups:</div>
            <div className="font-mono font-semibold text-lg text-win-green">79</div>
          </div>
          <div>
            <div className="text-ink/60">Estimated pipeline value:</div>
            <div className="font-mono font-semibold text-lg">$158k</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-hairline px-4 py-4 text-center text-xs text-ink/60 space-y-2">
        <p>Tomorrow's digest lands at 7:30 AM ET.</p>
        <p>Reply to this email if a score feels off — the AI learns from your feedback.</p>
        <div className="flex justify-center gap-4 pt-2">
          <button className="hover:text-ink transition-colors">Adjust niche</button>
          <span>·</span>
          <button className="hover:text-ink transition-colors">Pause for a day</button>
          <span>·</span>
          <button className="hover:text-ink transition-colors">Unsubscribe</button>
        </div>
      </div>
    </div>
  );
}
