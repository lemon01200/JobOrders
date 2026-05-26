# JobOrders — Website Spec for Figma

> Single source-of-truth for design & development.
> Hand this entire document to the Figma designer / front-end engineer.

- **Product**: JobOrders
- **Tagline**: *Pre-vetted job orders in your inbox before your competitors finish their coffee.*
- **Audience**: US independent recruiters and boutique recruiting agency owners (solo or 2–5 person teams).
- **Core promise**: AI-curated, scored, fresh job orders delivered every weekday at 7:30 AM.
- **Pricing**: $199/mo standard · $99/mo for life for Founding 50.

---

## Part 1 · Brand & Voice

### 1.1 Personality
Direct, peer-to-peer, slightly hustler-energy. Speaks like a fellow recruiter, not a SaaS marketer. Avoid corporate jargon and AI buzzwords.

### 1.2 Tone
- Confident, not cute.
- Specific numbers > vague claims ("11 hours" not "fast").
- Empathetic to the pain ("3 hours a day, gone").
- Promises money or time saved, never "productivity" or "efficiency."

### 1.3 Words to use
*job orders · placements · BD · pipeline · cold call · hiring manager · search assignment · commission · win rate · dark opportunity · fresh*

### 1.4 Words to avoid
*solution · platform · synergy · leverage · ecosystem · empower · revolutionary · AI-powered (in copy — fine in meta) · job board · candidate database*

---

## Part 2 · Design System

### 2.1 Mood
**"Morning newspaper meets premium SaaS."**
Generous whitespace. Editorial layout. Serif italic accents for emotional lines. Mono font for numeric / data elements (win rates, dollar amounts, timestamps) to feel like *data*, not marketing.

### 2.2 Grid
| Breakpoint | Cols | Max width | Gutter |
|---|---|---|---|
| Desktop | 12 | 1280px | 80px |
| Tablet | 8 | 768px | 48px |
| Mobile | 4 | 100% | 20px |

### 2.3 Section padding
Desktop 120px · Tablet 80px · Mobile 64px (top & bottom).

### 2.4 Typography
| Style | Size / Line-height | Notes |
|---|---|---|
| H1 (Display) | 56–64 / 1.05, -1.5 tracking | Sans-serif, with **serif italic accent phrase** |
| H2 | 40–44 / 1.15, -0.5 tracking | |
| H3 | 22–24 / 1.30 | |
| Body L | 18 / 1.55 | |
| Body | 16 / 1.6 | |
| Eyebrow | 13 uppercase, 1.5 tracking | |
| Numeric | Mono (IBM Plex Mono / JetBrains Mono) | Win rates, $ values, timestamps |

**Pairing recommendation**: Inter (sans) + Source Serif 4 Italic (accent) + IBM Plex Mono (numeric).

### 2.5 Color palette
| Token | Hex | Use |
|---|---|---|
| Ink | `#0B0F19` | Body text |
| Surface | `#FFFFFF` | Default BG |
| Soft surface | `#F6F5F0` | Warm off-white "morning paper" sections |
| Brand primary | `#1E5EFF` | Inbox blue, primary accents |
| Brand secondary | `#FF6A2C` | Coffee/urgency accent, serif italic phrases |
| Win green | `#16A34A` | Win rate 80+ |
| Win amber | `#F59E0B` | Win rate 60–79 |
| Win grey | `#6B7280` | Win rate < 60 |
| Dark opp purple | `#7C3AED` | Dark Opportunity feature accent |
| Deep purple gradient | `#1A1033 → #2D1B5C` | Two breakout sections only |
| Founding yellow | `#FBBF24` | Founding 50 banner only |
| Hairline | `#E6E3DA` | Borders, dividers |

### 2.6 Buttons
| Variant | Style |
|---|---|
| Primary | Ink fill, white text, 16px radius, 18px font |
| Secondary | 1px ink outline + arrow icon, no fill |
| Sizes | sm 40 / md 48 / lg 56 / xl 64 (height in px) |

### 2.7 Visual rhythm across the page
```
Hero (white)
  → Pain (soft surface — slightly sunken)
  → Product (white, life-size email)
  → How (white, structured)
  → Why (white, comparison table)
  → ★ Moat (deep purple — visual break)
  → Built For (white, light)
  → Pricing (white, anchored card)
  → Proof (soft surface)
  → FAQ (white)
  → ★ Final CTA (deep purple — bookend)
  → Footer (light grey)
```
Two purple sections at thirds = visual bookends. Founding yellow is the only saturated color outside the purples.

---

## Part 3 · Sitemap

```
Home   ← 90% of traffic, must convert standalone
├─ /sample        Public sample digest landing page
├─ /signup        Trial signup flow
├─ /login
├─ /pricing       (anchor on home initially)
├─ /about
├─ /blog          Recruiter Playbook (SEO long-tail)
├─ /privacy
├─ /terms
└─ /contact
```

---

## Part 4 · SEO / Meta

```html
<title>JobOrders — Pre-vetted job orders in your inbox every morning</title>
<meta name="description" content="JobOrders is the AI-powered BD engine for independent recruiters and boutique agencies. 5 scored, fresh job orders in your inbox by 7:30 AM — before your competitors finish their coffee." />

<meta property="og:title" content="Pre-vetted job orders in your inbox before your competitors finish their coffee." />
<meta property="og:description" content="Stop hunting for job orders. Start receiving them. The BD engine built for independent recruiters." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://joborders.com/" />
<meta property="og:image" content="https://joborders.com/og/og-inbox-mockup.png" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Pre-vetted job orders in your inbox before your competitors finish their coffee." />
<meta name="twitter:description" content="The BD engine for independent recruiters. 5 scored job orders by 7:30 AM, every weekday." />
<meta name="twitter:image" content="https://joborders.com/og/og-inbox-mockup.png" />

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "JobOrders",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "199", "priceCurrency": "USD" },
  "description": "AI-powered job order delivery service for independent recruiters and boutique recruiting agencies in the US."
}
</script>
```

**Target keywords**
- Primary: *job orders for recruiters · independent recruiter BD tool · business development for recruiters*
- Secondary: *boutique recruiting agency software · find job orders · recruiter lead generation*
- Long-tail (Blog): *how to find new clients as a recruiter · cold email hiring manager template*

---

## Part 5 · Homepage — Section by Section

### Section 1 · Hero

**Wireframe**
```
┌──── 1280px ──────────────────────────────────────────────────┐
│ [LOGO]              How·Why·Pricing      [Log in] [Start →]  │  72px nav
├──────────────────────────────────────────────────────────────┤
│ 🎟️  Founding 50: 37 seats left at $99/mo for life. Claim →  │  48px banner
├──────────────────────────────────────────────────────────────┤
│   ┌──── 6 cols ─────┐    ┌──── 6 cols ─────┐                 │
│   │  H1 + sub +     │    │   PHONE MOCKUP   │                │
│   │  2 CTAs +       │    │   tilt 6–8°,     │                │
│   │  trust line     │    │   400×800        │                │
│   └─────────────────┘    └─────────────────┘                 │
└──────────────────────────────────────────────────────────────┘
```

**Copy**
```
H1
Pre-vetted job orders in your inbox
*before your competitors finish their coffee.*

Subhead
JobOrders is the AI-powered BD engine built for independent
recruiters and boutique agencies. Every weekday at 7:30 AM,
we deliver 5 high-win-rate job orders — scored, ranked, and
ready to call.

Primary CTA   : Start 14-day free trial
Secondary CTA : See a sample morning digest →

Trust line    : Built for solo recruiters. No credit card required. Cancel anytime.

Founding banner: 🎟️ Founding 50: first 50 recruiters lock in $99/mo for life.
                 [N] seats left.  Claim a seat →
```

**Focal points**
1. H1 line 2 italic phrase — serif italic in brand secondary (`#FF6A2C`). This is the brand signature.
2. Phone mockup tilted 6–8°, soft drop shadow. Inside renders the sample digest at life size.
3. Founding banner — only saturated yellow on the page = physical scarcity cue.

**Mobile**: H1 → CTA → mockup (vertical stack, mockup 320px wide).

**Image prompt (Hero mockup)** — see Part 8.

---

### Section 2 · Pain Agitation

**Wireframe**
```
┌──── 1280px · BG: soft surface #F6F5F0 ──────────────────────┐
│                    Sound familiar?                          │
│                                                             │
│   🕒  3 hours a day,    ⏰ By the time      🗑️ LinkedIn      │
│       gone.                you find it,         Alerts are  │
│                            it's already cold.   noise.      │
│                                                             │
│            You don't need another job board.                │
│      You need someone to do BD for you while you sleep.     │
└─────────────────────────────────────────────────────────────┘
```

**Copy**

H2: `Sound familiar?`

Card 1 — 🕒 **3 hours a day, gone.**
Every morning you scan LinkedIn, Indeed, ZipRecruiter — hunting for fresh JDs, copy-pasting into spreadsheets, guessing which company is worth a cold call.

Card 2 — ⏰ **By the time you find it, it's already cold.**
The best job orders get flooded within 48 hours. If you see the JD on day 3, you're calling a hiring manager who's already talked to 12 other recruiters.

Card 3 — 🗑️ **LinkedIn Alerts are noise.**
Generic keyword matches. Staffing-firm reposts. Roles 1,000 miles outside your niche. You've stopped opening them.

Transition (large serif italic, 28px, centered):
*You don't need another job board.*
*You need someone to do BD for you while you sleep.*

**Focal points**
- Cards: no border, no fill, divided only by whitespace.
- Large emoji 72px.
- Transition line is the emotional punchline of the section.

---

### Section 3 · Product (what the email looks like)

**Wireframe**
```
┌──── 1280px ──────────────────────────────────────────────────┐
│   ┌── 5 cols ───┐    ┌── 7 cols ────────────────────┐        │
│   │ EMAIL frame │    │ WHAT SHOWS UP AT 7:30 AM     │        │
│   │ (max-h 600, │    │ Open it with your first      │        │
│   │ scrollable) │    │ coffee. Know exactly who to  │        │
│   │             │    │ call by 8:00.                │        │
│   │             │    │ 🔥 5 hand-picked …            │        │
│   │             │    │ 💰 Commission value …         │        │
│   │             │    │ 📡 Dark opportunities …       │        │
│   │             │    │ [See a real digest →]        │        │
│   └─────────────┘    └──────────────────────────────┘        │
└──────────────────────────────────────────────────────────────┘
```

**Copy**

Eyebrow: `WHAT SHOWS UP AT 7:30 AM`
H2: `Open it with your first coffee. Know exactly who to call by 8:00.`

Bullets:
- 🔥 **5 hand-picked job orders** — scored 0–100 on win rate, ranked by what you can actually close.
- 💰 **Commission value estimated** on every role. Never spend an hour on a $4k role again.
- 📡 **Dark opportunities** — companies that just raised, just hired a VP, and will be posting JDs in 6 weeks. Get in before the JD exists.

Secondary CTA: `See a real digest →` (links to /sample)

**Focal points**
- Left email frame is a real, scrollable iframe of the sample digest with a 24px Mail-client chrome bar (3 dots).
- Right column never wider than 6 cols of text-width.

---

### Section 4 · How It Works

**Wireframe**
```
┌──── 1280px ──────────────────────────────────────────────────┐
│        From signup to first call in 10 minutes.              │
│                                                              │
│  ① Tell us → ② We scan → ③ 5 scored → ④ One click            │
│  your niche   all night   at 7:30      → cold email          │
└──────────────────────────────────────────────────────────────┘
```

**Copy**

H2: `From signup to first call in 10 minutes.`

1. **Tell us your niche** — 5-minute profile: industries, functions, seniority, geography, target company stage. Set once.
2. **We scan everything, every night** — Greenhouse, Lever, Ashby, Indeed, 5,000+ VC-backed career pages, Crunchbase funding signals, and exec moves on LinkedIn.
3. **5 scored job orders land at 7:30 AM** — Win-rate scored. Commission estimated. Agency reposts filtered. Duplicates merged. Ready to act on.
4. **One click → outreach email drafted** — Tap "Generate cold email," tweak, send. From discovery to outreach in 10 minutes.

**Focal points**
- Step numbers 96px in hairline grey, behind the content.
- Arrows between cards = SVG in brand primary blue.
- Mobile: vertical, arrows rotate 90°.

---

### Section 5 · Why JobOrders (Comparison)

**Wireframe**
```
┌──── 1280px ──────────────────────────────────────────────────┐
│   Your current BD workflow vs. JobOrders                     │
│   We're competing with the 3 hours you spend hunting.        │
│                                                              │
│   ┌──────────────────────────────────────────────────┐       │
│   │            │ Doing it yourself │ JobOrders ✦     │       │
│   │ Time/wk    │ 3–5 hours         │ 10 min/day  ✓   │       │
│   │ JD age     │ 3–5 days          │ < 24 hours  ✓   │       │
│   │ Decide who │ Gut feel          │ Win rate + $ ✓  │       │
│   │ Dark opp   │ Invisible         │ 3–6mo early ✓   │       │
│   │ Reposts    │ Everywhere        │ Auto-filtered ✓ │       │
│   │ Cost       │ $12–16k/yr        │ $199/mo     ✓   │       │
│   └──────────────────────────────────────────────────┘       │
│                                                              │
│   If JobOrders helps you close one extra placement/year,     │
│   it pays for itself 10× over.                               │
└──────────────────────────────────────────────────────────────┘
```

**Copy**

H2: `Your current BD workflow vs. JobOrders`
Sub: `We're not competing with another tool. We're competing with the 3 hours you spend hunting every morning.`

| | Doing it yourself today | With JobOrders |
|---|---|---|
| Time per week on BD discovery | 3–5 hours | 10 min/day |
| Avg. age of JD when you find it | 3–5 days (already cold) | < 24 hours (most under 12h) |
| How you decide who to call | Gut feel | Win-rate score + commission value |
| Dark opportunities (pre-JD) | Invisible | Flagged 3–6 months early |
| Staffing-firm repost noise | Everywhere | Auto-filtered |
| Cost | ~$12–16k/year in opportunity cost | $199/month |

Footer line: *If JobOrders helps you close **one extra placement per year**, it pays for itself **10× over**.*

**Focal points**
- "JobOrders" column has soft blue fill `#EFF4FF` + ✦ marker in header.
- Every row in our column ends with a small green ✓.
- Hairline row dividers only, no outer border.

---

### Section 6 · Dark Opportunities Moat ★

This is the **memory anchor** of the page. Highest visual contrast.

**Wireframe**
```
┌──── 1280px · BG: deep purple gradient #1A1033 → #2D1B5C ────┐
│                                                             │
│   ┌── 6 cols ────┐      ┌── 6 cols ──────────┐              │
│   │ ┌──────────┐ │      │ See the deal       │              │
│   │ │ 📡 DARK  │ │      │ before there's     │              │
│   │ │ OPP.     │ │      │ a deal.            │              │
│   │ │ DataCo + │ │      │                    │              │
│   │ │ new VP   │ │      │ [body paragraph]   │              │
│   │ │ [actions]│ │      │                    │              │
│   │ └──────────┘ │      │ This is the part   │              │
│   │ ┌──────────┐ │      │ no job board       │              │
│   │ │ 📡 DARK  │ │      │ can replicate.     │              │
│   │ │ OPP.     │ │      │                    │              │
│   │ │ Acme +   │ │      │                    │              │
│   │ │ Series B │ │      │                    │              │
│   │ │ [actions]│ │      │                    │              │
│   │ └──────────┘ │      │                    │              │
│   └──────────────┘      └────────────────────┘              │
└─────────────────────────────────────────────────────────────┘
```

**Copy**

Card A — Exec Move signal
```
📡 DARK OPPORTUNITY
DataCo just hired a new VP of Engineering (ex-Stripe)
Predicted engineering hiring wave: 3–6 months.
Build the relationship now — before the JD goes live.
[ View company ]   [ Draft intro email ]
```

Card B — Funding signal
```
📡 DARK OPPORTUNITY
Acme Inc raised $15M Series B (3 days ago)
Predicted Q3 hiring: Sales + Engineering.
JD goes live in ~6 weeks. Cold outreach win-rate peaks now.
[ View company ]   [ Draft intro email ]
```

Right-side text:
H2: `See the deal before there's a deal.`
Body: `JobOrders monitors funding rounds, exec moves, and team-growth signals across 50,000+ companies. When a company is 6 weeks away from a hiring wave, you'll know — and your competitors won't.`
Closing italic: *This is the part no job board can replicate.*

**Focal points**
- Full-bleed deep purple gradient.
- Glassmorphic cards: backdrop-filter blur + 1px `#7C3AED` border.
- DARK OPPORTUNITY tag in brand secondary orange (max contrast vs. purple).
- Card buttons appear on **hover only** — hint that this is the in-app behavior.
- Closing italic line 36px with subtle underline.

---

### Section 7 · Built For

**Wireframe**
```
┌──── 1280px ──────────────────────────────────────────────────┐
│        Built for the way you actually work.                  │
│                                                              │
│  ┌── 4 cols ──┐   ┌── 4 cols ──┐   ┌── 4 cols ──┐            │
│  │ illu       │   │ illu       │   │ illu       │            │
│  │ Solo recr. │   │ Boutique   │   │ Niche      │            │
│  │ [body]     │   │ agencies   │   │ specialists│            │
│  └────────────┘   └────────────┘   └────────────┘            │
└──────────────────────────────────────────────────────────────┘
```

**Copy**

H2: `Built for the way you actually work.`

- **Solo recruiters** — You don't have a BD team. You *are* the BD team. JobOrders becomes your BD team.
- **Boutique agency owners (2–5 people)** — Distribute leads across your team. Track who's working what. No more "did anyone call this account?"
- **Niche specialists** — The deeper your niche, the better we get. Train the AI on your sweet spot once; reap precision forever.

**Focal points**
- Light line-art illustration at top of each card (greyscale only, no stock photos).
- Lighter visual weight than Pain section.

**Image prompts (3 illustrations)** — see Part 8.

---

### Section 8 · Pricing

**Wireframe**
```
┌──── 1280px ──────────────────────────────────────────────────┐
│         Less than 1% of a single placement fee.              │
│                                                              │
│   ┌── 7 cols (12px ink border) ──┐   ┌── 5 cols ──────┐      │
│   │ 🎟️ FOUNDING 50 · 37 left      │   │ Your ROI math   │      │
│   │ JobOrders Pro · Founding     │   │ Placement $25k  │      │
│   │ $99/mo for life (vs $199)    │   │ Annual    $2.4k │      │
│   │ ✓ features                   │   │ Break-even ~10% │      │
│   │ [Claim my Founding seat]     │   │ "Break even in  │      │
│   │ No card needed.              │   │  week 2."       │      │
│   └──────────────────────────────┘   └─────────────────┘      │
└──────────────────────────────────────────────────────────────┘
```

**Copy — Founding card**
```
🎟️ FOUNDING 50 · [N] seats left
JobOrders Pro · Founding
$99 / month for life
(regular price: $199/mo)

Everything in Pro, plus:
✓ Lifetime 50% off — never increases
✓ Founding Member badge
✓ Direct line to the founder
✓ Vote on the next 5 features

[ Claim my Founding seat ]
No credit card for first 14 days
```

**Copy — Standard card (after Founding 50 closes)**
```
JobOrders Pro
$199 / month   or $1,990/year — save 17%
✓ 5 scored job orders every morning
✓ Dark opportunity alerts
✓ Win-rate scoring + commission estimates
✓ One-click cold email drafts
✓ Email, Slack, and browser delivery
✓ Unlimited niche profiles
✓ Cancel anytime
[ Start 14-day free trial ]
```

**ROI card (right)**
```
Your ROI math
Avg. placement fee     $25,000
JobOrders annual cost   $2,388
Break-even          ~10% of one placement
Most users break even in week 2.
```

**Focal points**
- Pricing card has the only **12px ink border** on the page. Anchors the eye.
- Price number $99 (or $199) — 120px serif. "/month" tiny.
- "for life" with yellow highlight + mono font.
- ROI card has no border, transparent BG.

---

### Section 9 · Proof (placeholder until testimonials)

**Wireframe**
```
┌──── 1280px · BG: soft surface ──────────────────────────────┐
│   Recruiters who already get their mornings back             │
│                                                              │
│   3,247 JD/wk      487 dark opps      11h median JD age      │
│                                                              │
│   [reserved 3-col testimonial grid, empty for now]           │
└──────────────────────────────────────────────────────────────┘
```

Numbers in 96px mono font.

---

### Section 10 · FAQ

**Wireframe**
```
┌──── 1280px ──────────────────────────────────────────────────┐
│         Questions you're probably about to ask               │
│                                                              │
│   ▾ How is this different from LinkedIn Recruiter / Indeed?  │
│   ▸ Where do you source job orders from?                     │
│   ▸ Won't my competitors see the same job orders?            │
│   ▸ What if my niche is super specific?                      │
│   ▸ Can I cancel anytime?                                    │
│   ▸ Do you filter out staffing-firm reposts?                 │
│   ▸ Is there really a free trial?                            │
│   ▸ Does this work outside tech?                             │
└──────────────────────────────────────────────────────────────┘
```

**Copy**

H2: `Questions you're probably about to ask`

1. **How is this different from LinkedIn Recruiter or Indeed?**
Those tools help you find *candidates*. JobOrders finds *clients*. Completely different job.

2. **Where do you source job orders from?**
Public ATS feeds (Greenhouse, Lever, Ashby), 5,000+ company career pages, major job boards, plus funding signals from Crunchbase and exec-move signals on LinkedIn.

3. **Won't my competitors see the same job orders?**
The JDs are public. The edge is *speed and scoring*. You see them within hours of going live, ranked for your niche, before most recruiters even open their laptop.

4. **What if my niche is super specific?**
The narrower, the better. The AI learns from your "following up" and "not for me" feedback, so precision compounds week over week.

5. **Can I cancel anytime?**
Yes. Month-to-month. No contracts. One click in settings.

6. **Do you filter out staffing-firm reposts?**
Aggressively. Agency-posted JDs are useless to you, so they never hit your inbox.

7. **Is there really a free trial?**
14 days, full access, no credit card required.

8. **Does this work outside tech?**
Yes. Sales, Finance, Healthcare, Legal, Marketing, Executive Search — anywhere placement fees are $15k+.

**Focal points**
- Default: first item expanded, all others collapsed.
- ▸ / ▾ glyphs.
- Hairline dividers between items.
- 200ms ease-out expand animation.

---

### Section 11 · Final CTA + Footer

**Wireframe**
```
┌──── 1280px · BG: deep purple gradient (bookend) ────────────┐
│                                                              │
│        Tomorrow morning at 7:30 AM,                          │
│        your competitors will open LinkedIn.                  │
│                                                              │
│        You'll open your inbox —                              │
│        and already know exactly who to call.                 │
│                                                              │
│        [ Start your 14-day free trial → ]                    │
│        No credit card. Cancel anytime.                       │
├──────────────────────────────────────────────────────────────┤
│ [Logo]   Product / Company / Legal columns                   │
│ © 2026 JobOrders. Built for recruiters who'd rather close.   │
└──────────────────────────────────────────────────────────────┘
```

**Copy**

H2 (white, 48px): `Tomorrow morning at 7:30 AM, your competitors will open LinkedIn.`
Body (white italic, 24px): *You'll open your inbox — and already know exactly who to call.*
Primary CTA (xl): `Start your 14-day free trial →`
Trust line: `No credit card. Cancel anytime.`

**Footer columns**
- **Product**: How it works · Sample digest · Pricing
- **Company**: About · Recruiter Playbook · Contact
- **Legal**: Privacy · Terms
- **Bottom line**: © 2026 JobOrders. Built for recruiters who'd rather close than search.

---

## Part 6 · /sample Landing Page

**Purpose**: Public, no-auth-required page that shows a real sample digest. Linked from Hero secondary CTA and Section 3 CTA. Highest-impact conversion asset on the site.

**Structure**
```
┌──── Sticky banner (56px, always visible) ───────────────────┐
│ This is a real sample digest. Yours will be tailored.       │
│ [ Start 14-day free trial → ]                               │
├─────────────────────────────────────────────────────────────┤
│ Page header                                                 │
│   "Here's what lands in your inbox at 7:30 AM."             │
│   Below is a real digest sent to a recruiter who            │
│   specializes in Senior Backend / Platform roles at         │
│   Series B–C SaaS companies. Names anonymized, signals real.│
│                                                             │
│   See a sample for:                                         │
│   [ Tech ✓ ]  [ Sales ]  [ Finance ]                        │
├─────────────────────────────────────────────────────────────┤
│ [ Full sample digest rendered here — see Part 7 ]           │
├─────────────────────────────────────────────────────────────┤
│   "Wait — this is what I get every morning?"                │
│   Yes. Tomorrow's lands at 7:30 AM.                         │
│   [ Start 14-day free trial → ]                             │
├─────────────────────────────────────────────────────────────┤
│ Inline FAQ (expandable)                                     │
│   ▸ How is win rate calculated?                             │
│   ▸ Where do dark opportunities come from?                  │
│   ▸ What if my niche isn't tech?                            │
│   ▸ How fresh are the JDs really?                           │
└─────────────────────────────────────────────────────────────┘
```

**Key details**
- No main nav. Only the sticky CTA banner.
- Niche switcher (Tech / Sales / Finance) — build 3 sample digests at launch. Each switch should be instant client-side.
- Anonymization style: `Series B SaaS · 120 employees · Remote-first` reads more credible than fake company names like "Acme Inc."
- Track scroll depth — users who reach 70% convert at 5–10× the bouncer rate.

**Inline FAQ answers**

**How is win rate calculated?**
A blend of 6 signals: JD freshness, ATS source quality, salary level, company stage, hiring-manager signals (recent posts / new exec), and competition (agency reposts detected). Calibrated against actual placements made by JobOrders users.

**Where do dark opportunities come from?**
Funding announcements (Crunchbase), executive moves on LinkedIn, and team-growth signals across 5,000+ tracked companies. We surface them ~6 weeks before the JD goes live.

**What if my niche isn't tech?**
JobOrders works for any high-fee desk: Sales, Finance, Healthcare, Legal, Marketing, Executive Search. The narrower your niche, the better we get.

**How fresh are the JDs really?**
Median JD age in last week's digests: **11 hours**. 92% of #1-ranked JDs are under 24 hours old when delivered.

---

## Part 7 · Sample Digest Email (rendered content)

This block is rendered inside the Hero mockup, Section 3 frame, and /sample page.

**Subject**: `[5 new job orders] Sr. Go Engineer · Series B · Remote · 9h old`
**Preview text**: `Top win-rate: 87. Predicted commission: $34–40k. 1 dark opportunity flagged.`

```
─────────────────────────────────────────────────────
  JobOrders · Tuesday, May 26 · Tailored for Sarah
─────────────────────────────────────────────────────

  ☕  Good morning, Sarah.
      5 new job orders matched your niche overnight.
      1 dark opportunity is heating up.
      Estimated time to work this list: 12 minutes.

─────────────────────────────────────────────────────
  🔥  #1   WIN RATE 87 / 100               [HIGH]
─────────────────────────────────────────────────────

  Senior Go Engineer
  Series B SaaS · 120 employees · Remote-first (US)
  Posted 9 hours ago via Greenhouse

  Salary band:        $170k – $200k
  Your fee (20%):     $34,000 – $40,000
  Hiring urgency:     2 roles open · backfill + growth
  HM signal:          New Eng Director hired Apr 14
  Competition:        Low — no agency reposts detected

  Why it scored 87:
   ✓  Direct ATS posting (no agency middleman)
   ✓  Stack matches your profile (Go, AWS, K8s)
   ✓  Series B + new Eng leader = open to vendors
   ✓  Posted < 12h, you're likely first to call

  [ View full JD ]   [ Generate cold email ]
  [ Mark as following up ]      [ Not for me ]

─────────────────────────────────────────────────────
  🔥  #2   WIN RATE 81 / 100               [HIGH]
─────────────────────────────────────────────────────

  Staff Backend Engineer
  Series C Fintech · 340 employees · NYC / Hybrid
  Posted 14 hours ago via Lever

  Salary band:        $190k – $230k
  Your fee (20%):     $38,000 – $46,000
  HM signal:          VP Eng posted on LinkedIn
                      "we're hiring aggressively in Q3"
  Competition:        Medium — 1 agency repost detected

  [ View full JD ]   [ Generate cold email ]

─────────────────────────────────────────────────────
  ⭐  #3   WIN RATE 74 / 100              [MEDIUM]
─────────────────────────────────────────────────────

  Senior Platform Engineer
  Late-stage startup · 800 employees · Remote (US)
  Posted 22 hours ago via Ashby

  Salary band:        $180k – $210k
  Your fee (20%):     $36,000 – $42,000

  [ View full JD ]   [ Generate cold email ]

─────────────────────────────────────────────────────
  ⭐  #4   WIN RATE 68 / 100              [MEDIUM]
─────────────────────────────────────────────────────

  Engineering Manager, Infra
  Series B · 95 employees · Austin / Hybrid
  Posted 1 day ago

  Salary band:        $210k – $250k
  Your fee (20%):     $42,000 – $50,000

  [ View full JD ]   [ Generate cold email ]

─────────────────────────────────────────────────────
  ⭐  #5   WIN RATE 62 / 100              [MEDIUM]
─────────────────────────────────────────────────────

  Senior Site Reliability Engineer
  Public co · 4,200 employees · SF / Hybrid
  Posted 1 day ago

  Salary band:        $175k – $205k
  Your fee (20%):     $35,000 – $41,000

  [ View full JD ]   [ Generate cold email ]

═════════════════════════════════════════════════════
  📡  DARK OPPORTUNITY · 1 new signal
═════════════════════════════════════════════════════

  Northwind AI just raised $22M Series B
  Announced 2 days ago · TechCrunch
  Stage: Series B · 60 employees · SF + Remote

  Predicted hiring wave:
   →  Engineering: 8–12 hires over next 90 days
   →  Sales: starts ~6 weeks out
   →  Window for cold outreach: opens NOW,
      peaks in ~2 weeks, closes when JDs go live

  Why this matters:
   You'll have the conversation while every
   other recruiter is still waiting for the JD.

  [ View company brief ]
  [ Draft intro email to founder/VP Eng ]
  [ Add to my watchlist ]

─────────────────────────────────────────────────────
  📊  Your week so far
─────────────────────────────────────────────────────

   Job orders delivered:        18
   Marked as following up:       4
   Avg. win rate of follow-ups: 79
   Estimated pipeline value:    $158k

─────────────────────────────────────────────────────
  Tomorrow's digest lands at 7:30 AM ET.
  Reply to this email if a score feels off —
  the AI learns from your feedback.

  Adjust niche  ·  Pause for a day  ·  Unsubscribe
─────────────────────────────────────────────────────
```

**Visual rules for rendering**
- WIN RATE number: 28px mono, color-coded green (80+) / amber (60–79) / grey (<60).
- Commission dollar amount: bold, slightly larger than body.
- "Generate cold email" button hugs every JD card.
- No company logos. Text-first.
- "Not for me" present on every JD — this is the RLHF feedback loop.

---

## Part 8 · Image Prompts (for AI image generation tools)

All images use a **consistent visual language**: editorial / newspaper-meets-premium-SaaS, warm off-white (`#F6F5F0`) or pure white backgrounds, restrained color palette, no stock photo cliches.

### 8.1 Hero phone mockup (`hero-inbox-mockup.png`)

```
Editorial product mockup: a modern iPhone 15 floating against a
warm off-white background (#F6F5F0), tilted 6 degrees clockwise.
Screen displays a clean morning email digest titled "JobOrders ·
Tuesday, May 26." Visible content: a "Good morning, Sarah" line,
then 3 job order cards stacked, each showing "WIN RATE 87"
in large mono green digits, a salary band ($170k–$200k), and
"Your fee: $34,000–$40,000" in bold. Below the cards a purple
DARK OPPORTUNITY callout with a 📡 emoji. UI uses Inter font for
text and mono font for numbers. Soft natural shadow under the
phone, light coming from top-left. Premium minimal aesthetic,
editorial newspaper feel. No people. 16:10 aspect ratio.
```

### 8.2 Open Graph image (`og-inbox-mockup.png`, 1200×630)

```
Wide editorial composition. Left half: oversized serif italic
quote "Pre-vetted job orders in your inbox before your
competitors finish their coffee." in dark ink color on warm
off-white (#F6F5F0). Right half: phone screen close-up showing
the JobOrders morning digest with a prominent WIN RATE 87 badge
in mono green, salary numbers, and a purple DARK OPPORTUNITY
banner. JobOrders logo (small) bottom-left. Coffee-cup ring
stain detail in bottom-right corner. Minimal, editorial,
premium SaaS. No people. 1200×630.
```

### 8.3 Section 3 — Full-size digest mockup (`digest-fullsize.png`)

```
Vertical email mockup, life-size desktop view. Width 480px,
height ~1200px. Contains exactly: header "JobOrders · Tuesday,
May 26 · Tailored for Sarah", a 12-minute summary line with
☕ emoji, five job order cards (each with WIN RATE numbers
87, 81, 74, 68, 62 color-coded green-amber-grey, salary band,
your-fee line, action buttons), and one purple-bordered
DARK OPPORTUNITY card for "Northwind AI raised $22M Series B."
Footer shows weekly stats. Use Inter for text, IBM Plex Mono
for numbers. White card on warm off-white BG (#F6F5F0).
Subtle 1px hairline borders (#E6E3DA). No images of people
or company logos.
```

### 8.4 Built For section illustrations (3 images, line-art, greyscale)

**Solo recruiter card (`illu-solo.svg`)**
```
Minimal line illustration, single weight stroke, ink color
(#0B0F19) on transparent BG. A lone figure at a desk with a
laptop, a steaming coffee cup, and an open inbox icon glowing
on the screen. Slight editorial newspaper texture. Calm,
focused, dawn lighting suggested only through subtle line
weight variation. No background, no fills. SVG-friendly.
160×160px.
```

**Boutique agency card (`illu-team.svg`)**
```
Minimal line illustration, single weight stroke, ink color
(#0B0F19). Three figures at a shared table, each with a
laptop, connected by a network line that branches into job
order cards. Same editorial linework as the solo illustration.
No fills, no background. 160×160px.
```

**Niche specialist card (`illu-niche.svg`)**
```
Minimal line illustration, single weight stroke, ink color
(#0B0F19). A magnifying lens hovering over a stylized
specialty badge / target, with sparkles indicating precision.
Same editorial linework. No fills, no background. 160×160px.
```

### 8.5 Founding 50 badge / lock icon (`founding-badge.svg`)

```
Vector badge icon: a ticket-stub silhouette with "FOUNDING 50"
text inside, in ink color on Founding yellow (#FBBF24) fill.
Slight serrated edges on the left side like a torn ticket.
Minimal, premium. 64×64px.
```

### 8.6 Dark Opportunity card icon (`icon-dark-opp.svg`)

```
Minimal vector icon, single stroke, in deep purple (#7C3AED).
A radar/sonar wave shape (3 expanding arcs) with a single
small dot at the center indicating the detected signal.
24×24px, SVG, no fill.
```

### 8.7 OG image alternative — empty state (`og-coffee.png`)

For social posts / blog cards. Same dimensions 1200×630.

```
Top-down photographic-style render: a white desk with a
single steaming coffee cup, a folded morning newspaper with
the JobOrders nameplate visible, and a phone showing
"7:30 AM" lock screen with 1 email notification preview that
reads "5 new job orders for you." Soft morning window light
from left, warm shadows. Premium editorial photography style.
Color palette restricted to ink, warm off-white, and the
phone's screen glow. No people. 1200×630.
```

---

## Part 9 · Interactions & Motion

| Element | Behavior |
|---|---|
| Hero phone mockup | Hover: scale 1.02, shadow deepens. Click → `/sample` |
| All win-rate numbers | Always mono font, never sans/serif |
| Comparison table rows | Hover: full-row highlight to guide eye downward |
| Dark Opp cards | Buttons appear on hover only (hints at app behavior) |
| FAQ accordion | 200ms ease-out expand, never snappier |
| Pricing button | Hover: ink fill transitions to brand primary blue |
| Founding banner counter | Real number, never fake. When < 10, switch to red "Final 9 seats" treatment |
| Mobile sticky CTA | Appears after scroll > 600px, 56px bottom bar |
| Cookie banner | Single-line strip, no modal |

**Animation principles**
- No marquee, no parallax, no scroll-jacking.
- Page should feel calm and confident, not flashy.
- Motion only where it earns its place (mockup hover, FAQ expand).

---

## Part 10 · Responsive Rules

### Desktop ≥ 1024px
- Full 12-col grid as specified.
- Hero is 2-column (copy + mockup).
- Section 3 is 5/7 split.
- Section 5 table is full 6-row layout.
- Section 6 Moat is 6/6 split with 2 cards stacked.

### Tablet 768–1023px
- Hero stays 2-col but mockup smaller (max 320px).
- 3-column sections (Pain, Built For, FAQ stats) stay 3-col.
- Pricing becomes single column (Founding card stacked above ROI).

### Mobile < 768px
- All sections single column.
- Hero: H1 → subhead → CTAs → mockup (vertical).
- Comparison table: convert to stacked cards (one per row), with our column highlighted via background fill.
- Phone mockup max width 320px, centered.
- Founding banner: still visible at top, may wrap to 2 lines.
- Sticky bottom CTA bar appears after 600px scroll.

---

## Part 11 · Accessibility

- Min body font 16px.
- Color contrast: all text vs. its BG ≥ 4.5:1 (verify Win amber on white, Founding yellow on white — may need outline).
- All CTAs reachable via keyboard, visible focus ring (2px brand primary outline).
- FAQ accordion: `<details>/<summary>` native semantics.
- Mockup images have descriptive alt text (specified in HTML).
- Avoid relying on emoji as the only meaning carrier — pair every emoji with text.
- Reduced-motion media query disables hover scale and accordion easing.

---

## Part 12 · Asset Checklist

| Asset | Size | Format | Notes |
|---|---|---|---|
| Logo wordmark | SVG | Vector | Mono + color versions |
| Hero phone mockup | 1200×750 | PNG (transparent BG) | See 8.1 |
| Full-size digest mockup | 480×1200 | PNG | See 8.3 |
| OG image | 1200×630 | PNG | See 8.2 |
| Twitter card image | 1200×630 | PNG | Same as OG |
| Built For illustrations | 160×160 ×3 | SVG | See 8.4 |
| Founding badge | 64×64 | SVG | See 8.5 |
| Dark Opp icon | 24×24 | SVG | See 8.6 |
| Favicon | 32×32, 192×192 | PNG | Wordmark "J" |
| Apple touch icon | 180×180 | PNG | Ink BG, white "J" |

---

## Part 13 · Definition of Done

The site is ready to ship when:

- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO 100
- [ ] All copy in this doc rendered exactly, no placeholder Lorem
- [ ] /sample page renders the full digest with 3 niche options
- [ ] Founding banner pulls real seat count from a backend / config flag
- [ ] Signup flow does not require credit card for 14-day trial
- [ ] Hero mockup, OG image, and digest mockup all match the visual brief
- [ ] Mobile sticky CTA bar functional below 768px
- [ ] FAQ accordion keyboard-accessible
- [ ] All `og:` and `twitter:` meta tags present and tested
- [ ] Schema.org SoftwareApplication JSON-LD valid
- [ ] 404 page exists, branded
- [ ] Privacy + Terms pages linked from footer
