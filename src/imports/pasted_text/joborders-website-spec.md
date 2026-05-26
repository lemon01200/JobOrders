ROLE
You are building the production marketing website for JobOrders, a
SaaS product for US independent recruiters. Your single source of
truth is the uploaded document `JobOrders-Website-Spec-EN.md`. That
file contains all copy, structure, design tokens, image prompts,
interactions, responsive rules, and acceptance criteria. Treat it
as a contract — do not invent, paraphrase, or substitute.

WHAT TO BUILD
A responsive marketing website with two pages:
1. Home (`/`)   — Sections 1 through 11 as specified in Part 5 of
   the spec, plus the global nav and footer.
2. Sample (`/sample`) — The public sample digest landing page as
   specified in Part 6 of the spec.

In addition, build placeholder routes (with minimal styled stubs,
not full pages) for: `/signup`, `/login`, `/about`, `/blog`,
`/privacy`, `/terms`, `/contact`, and a branded `/404`.

TECH STACK
- React + TypeScript
- Tailwind CSS (use the exact color tokens from spec Part 2.5 as
  Tailwind theme extensions; do not hardcode colors elsewhere)
- Inter (sans), Source Serif 4 Italic (serif accent), IBM Plex Mono
  (numeric). Load from Google Fonts.
- Framer Motion only where Part 9 calls for motion. Nothing else.
- No CMS. All copy is hardcoded from the spec.
- No analytics, no third-party trackers — leave a single commented
  placeholder `<!-- ANALYTICS HERE -->` in the document head.

DESIGN FIDELITY RULES
1. Render every section in Part 5 in the order listed. Do not
   reorder, merge, or skip.
2. Use the exact tokens in Part 2 (grid, spacing, type scale, color
   palette, button sizes). Do not pick "close enough" alternatives.
3. The two deep-purple sections (Section 6 Moat, Section 11 Final
   CTA) must use the gradient `#1A1033 → #2D1B5C` and feel like
   visual breaks — see Part 2.7 "Visual rhythm across the page."
4. Founding banner yellow `#FBBF24` is the ONLY saturated color
   outside the two purple sections. Do not add other accents.
5. All numeric values (win rates, dollar amounts, timestamps) MUST
   render in IBM Plex Mono. Body and headings never use mono.
6. The serif-italic accent phrase in H1 ("before your competitors
   finish their coffee.") must use Source Serif 4 Italic in brand
   secondary orange `#FF6A2C`. This is the brand signature.

CONTENT FIDELITY RULES
1. Use the copy from the spec VERBATIM. Do not rewrite, shorten,
   or "improve" any line. Marketing tone is intentional.
2. Render the sample digest content in Part 7 of the spec exactly
   as written, inside:
   - the Hero phone mockup (Section 1)
   - the Section 3 email frame
   - the `/sample` page body
3. Forbidden words anywhere in the UI: "solution", "platform",
   "synergy", "leverage", "ecosystem", "empower", "revolutionary",
   "AI-powered" (allowed only in `<meta>` tags), "job board",
   "candidate database". If you feel tempted to use one, you are
   wrong — re-read the spec.
4. The Founding banner seat counter shows "37" as a static value
   for now. Expose it via a single config constant
   `FOUNDING_SEATS_LEFT` so it can later be wired to a backend.

IMAGES
For each image referenced in Part 8 of the spec:
- Create a placeholder `<img>` with the exact filename from the
  spec (e.g. `/img/hero-inbox-mockup.png`).
- Include the EXACT alt text specified in the spec.
- Render the placeholder as a styled div with the right aspect
  ratio, BG color `#F6F5F0`, and a small caption showing the
  filename so the human can replace later.
- DO NOT generate AI images. The human will produce them using
  the prompts in Part 8.
EXCEPTION: For the Hero phone mockup (Section 1) AND the Section 3
full-size digest, render the digest content as REAL HTML/CSS
(using Part 7's content) inside a phone-frame and a mail-client-
frame respectively. The mockups are live, not images.

INTERACTIONS
Implement exactly what is listed in Part 9. Nothing more.
- No parallax, no scroll-jacking, no auto-playing animations.
- Respect `prefers-reduced-motion`.
- The mobile sticky CTA bar appears only after 600px of scroll.

RESPONSIVE
Follow Part 10 exactly. Test at three sizes:
- Desktop 1280px
- Tablet 820px
- Mobile 390px

ACCESSIBILITY
Meet every item in Part 11. In particular:
- Visible 2px brand-blue focus rings on every interactive element.
- FAQ uses native `<details>/<summary>`.
- Every emoji is paired with text; emoji is never the only label.
- Verify color contrast for amber on white and yellow on white;
  add a 1px ink outline if contrast fails AA.

BUILD ORDER
Do these in sequence; do not jump ahead.
1. Set up the project skeleton: routing, Tailwind config with the
   spec's design tokens, font loading, global layout (nav +
   footer + Founding banner).
2. Build the reusable primitives: Button (primary/secondary, 4
   sizes), WinRateBadge (mono, color-coded), CommissionAmount,
   SectionContainer (handles section padding + grid).
3. Build the sample digest component (Part 7 content) as a
   standalone reusable component. It will be embedded in three
   places.
4. Build Home Sections 1 → 11 in order. After each section,
   stop and self-check against the spec before moving on.
5. Build the `/sample` page using the same digest component.
6. Build the placeholder routes and 404.
7. Add interactions from Part 9.
8. Run through the Acceptance Criteria in Part 13 and fix any
   gaps before delivering.

EXPLICIT NON-GOALS
- Do not build a CMS, blog engine, auth, or signup flow logic.
  The signup button just routes to `/signup` which is a stub.
- Do not add testimonials with fake names. The testimonial grid
  in Section 9 stays empty, exactly as specified.
- Do not "improve" the comparison table by adding more rows.
- Do not invent product features that are not in the spec.
- Do not change the brand voice to be more "professional" or
  more "playful". The voice is set.

WHEN YOU ARE UNSURE
If anything in the spec seems ambiguous or contradictory, prefer
the more specific instruction. If still unclear, leave a code
comment `// CLARIFY: <question>` and proceed with the most
conservative interpretation. Do not improvise.

DELIVERABLE
A working, deployable React + Tailwind project that renders the
Home and Sample pages with full fidelity to the spec, plus the
stub routes. Provide a brief README that lists:
- which sections of the spec each component implements
- where image placeholders live and how to swap them in
- the location of `FOUNDING_SEATS_LEFT` and any other config
- known deviations from the spec (should be zero, but list any)