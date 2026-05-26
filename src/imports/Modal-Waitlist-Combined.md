# Modal Waitlist Conversion — Combined Spec for Figma Make

> **What this document is**: A merged, self-contained brief for Figma Make. It contains:
> - **Part 1**: The original Free Trial Modal spec that was already implemented based on `JobOrders-Website-Spec-EN.md`. Use this as a reference for what currently exists.
> - **Part 2**: The Waitlist Mode update — global string replacements, section-by-section copy changes, and a state-by-state rewrite of the modal. **Apply these changes on top of what was already built.**
>
> **Why we're changing it**: The original copy assumed the product was shipping NOW (14-day free trial, tomorrow's digest, no credit card needed). Reality: the product is still in pre-launch demo phase. This document converts the site from **Trial mode** → **Waitlist mode** without losing the Founding 50 scarcity story.
>
> **Core promise unchanged**: First 50 sign-ups lock in $99/mo for life vs. $199 public price.
> **New honest framing**: No payment now. We email you the moment we launch.

---

# PART 1 — Original Free Trial Modal Spec (already implemented)

This is what exists in the build today. Keep all of it as a reference — only the items called out in Part 2 need to change.

## 1.1 Trigger logic

| Trigger location | Behavior |
|---|---|
| Hero primary CTA `Start 14-day free trial` | Opens modal (default variant) |
| Pricing card `Claim my Founding seat` | Opens modal (Founding emphasis variant) |
| Final CTA `Start your 14-day free trial →` | Opens modal (default variant) |
| Top Founding banner `Claim a seat →` | Opens modal (Founding emphasis variant) |
| Mobile bottom sticky CTA | Opens modal |

All CTAs point to the same modal component; a prop switches between two variants: `standard` / `founding`.

## 1.2 Default state — main form

### Wireframe

```
                  ┌──────────────────────────────────────┐
                  │                                  ✕   │
                  │                                      │
                  │   🎟️  FOUNDING 50 · 37 seats left    │
                  │                                      │
                  │   Claim your Founding seat.          │
                  │                                      │
                  │   $99/month for life. Locked         │
                  │   forever, even when we raise        │
                  │   the price to $199.                 │
                  │                                      │
                  │   ─────────────────────────────      │
                  │                                      │
                  │   Work email                         │
                  │   ┌─────────────────────────────┐    │
                  │   │ you@youragency.com          │    │
                  │   └─────────────────────────────┘    │
                  │                                      │
                  │   ┌──────────────────────────────┐   │
                  │   │  Reserve my seat →           │   │
                  │   └──────────────────────────────┘   │
                  │                                      │
                  │   ✓ No credit card for 14 days       │
                  │   ✓ First digest at 7:30 AM tomorrow │
                  │   ✓ Cancel anytime, one click        │
                  │                                      │
                  │   ─────────────────────────────      │
                  │                                      │
                  │   Already have an account? Log in    │
                  │                                      │
                  └──────────────────────────────────────┘
```

## 1.3 Visual specs (do NOT change these in Part 2)

### Size & positioning

| Dimension | Desktop | Tablet | Mobile |
|---|---|---|---|
| Modal width | 480px fixed | 480px | 100vw - 32px |
| Modal height | content auto (~540px) | auto | auto |
| Border radius | 20px | 20px | 20px |
| Inner padding | 40px | 40px | 24px |
| Centering | viewport center | viewport center | viewport center or bottom sheet |

### Colors & typography (using main site tokens)

| Element | Style |
|---|---|
| Modal background | `#FFFFFF` |
| Overlay | `rgba(11, 15, 25, 0.6)` + backdrop-filter blur 8px |
| Founding badge | bg `#FBBF24`, text `#0B0F19`, 14px mono, 6px radius, padding 8px 12px |
| H2 | Source Serif 4, 28px, `#0B0F19` |
| Subhead | Inter, 16px, `#6B7280`, line-height 1.55 |
| Field label | Inter, 13px uppercase, letter-spacing 1.5, `#6B7280` |
| Input | height 56px, radius 12px, 1.5px border `#E6E3DA` |
| Input focus | 2px border `#1E5EFF` + 4px blue halo |
| Input font | Inter, 18px, `#0B0F19` |
| Primary button | height 56px, full width, bg `#0B0F19`, white text 18px, radius 14px |
| Primary hover | bg transitions to `#1E5EFF` |
| Trust bullet | Inter, 14px, `#0B0F19`; ✓ color `#16A34A` |
| Divider | 1px `#E6E3DA` |
| Close ✕ | 16×16, absolute top-right 16px, `#6B7280`, hover `#0B0F19` |

### Key visual details

- The yellow Founding badge is the brightest element in the modal — intentionally mirrors the main site banner for visual continuity.
- The "$199" price uses strikethrough + grey for contrast.
- Primary button is one size larger than the main site default (56px + 18px) — this is the critical conversion button.
- Enter animation: scale(0.96) + opacity 0 → scale(1) + opacity 1, 200ms ease-out
- Exit animation: reverse, 150ms

## 1.4 Loading state

Button content replaced with:
```
   ┌──────────────────────────────┐
   │  ⟳  Reserving your seat...   │
   └──────────────────────────────┘
```
Button disabled; input disabled. Spinner color matches button text color.

## 1.5 Success state

### Wireframe

```
                  ┌──────────────────────────────────────┐
                  │                                  ✕   │
                  │                                      │
                  │            🎟️                        │
                  │                                      │
                  │   You're in. Seat #14 of 50.         │
                  │                                      │
                  │   Check your inbox — we just sent    │
                  │   a magic link to finish setup       │
                  │   (5 minutes, then your first        │
                  │   digest lands tomorrow at 7:30 AM). │
                  │                                      │
                  │   ─────────────────────────────      │
                  │                                      │
                  │   While you're here…                 │
                  │                                      │
                  │   Drop your LinkedIn so tomorrow's   │
                  │   digest is tailored from day one.   │
                  │                                      │
                  │   ┌─────────────────────────────┐    │
                  │   │ linkedin.com/in/yourname    │    │
                  │   └─────────────────────────────┘    │
                  │                                      │
                  │   ┌──────────────────────────────┐   │
                  │   │  Save & continue →           │   │
                  │   └──────────────────────────────┘   │
                  │                                      │
                  │       Skip — I'll do this later      │
                  │                                      │
                  └──────────────────────────────────────┘
```

## 1.6 Waitlist state (50 seats full)

Triggered when `FOUNDING_SEATS_LEFT === 0`.

## 1.7 Error states

- Email format invalid (frontend validation): red border `#DC2626` + inline error text
- Email already registered (backend): "Welcome back" state with "Email me a login link" CTA
- Generic error (network/backend): fallback message with founder email

## 1.8 Interaction rules

| Behavior | Rule |
|---|---|
| Open | Click any CTA, body scroll locked |
| Enter animation | Fade + scale 0.96 → 1.0, 200ms ease-out |
| Exit animation | Reverse, 150ms |
| Close | (1) Top-right ✕  (2) Click overlay  (3) ESC key |
| After close | State resets, but email field value is kept in sessionStorage for 30 min — auto-refilled on next open |
| Email validation | On blur; valid → border turns `#16A34A` |
| Submit button enabled | Email non-empty + valid format; otherwise `opacity: 0.4` + `cursor: not-allowed` |
| Anti-duplicate submission | Button locked for 3s after submit |
| URL param prefill | If URL contains `?email=xxx` (from cold email), auto-prefill |
| Success: no auto-close | User must explicitly click "Save & continue" or ✕ — they need to see the seat number |
| Seat counter | After successful submit, main site banner decrements -1 (optimistic update) |

## 1.9 Mobile responsive

- Modal width = `100vw - 32px`
- Inner padding 24px
- Subhead may drop "even when we raise the price to $199" to save space
- Input `font-size` must be ≥ 16px (otherwise iOS Safari auto-zooms the page)
- Optional: bottom sheet style (slides from bottom, 70vh) — more native on mobile

## 1.10 Accessibility (must implement)

- `role="dialog"` + `aria-modal="true"` + `aria-labelledby` pointing to H2
- On open, focus moves to the input
- Tab key cycles focus within the modal (focus trap) — cannot reach background page
- ESC closes
- After close, focus returns to the triggering CTA button
- Error messages use `aria-live="polite"` for screen readers
- Close ✕ has `aria-label="Close"`

## 1.11 Backend / email integration

After a successful submit:

1. **Database write**: email, created_at, UTM params, referrer, founding_seat_number
2. **Decrement seat counter**: atomic operation to prevent over-allocation (PostgreSQL `UPDATE ... RETURNING`)
3. **Send magic link email** (= the existing `D2.6 Welcome email`)
4. **Live counter update on homepage banner** (WebSocket or polling)
5. **Founder notification**: Slack webhook posts `Seat #14 reserved by you@xxx.com (LinkedIn: ...)` to founder channel for manual review of high-quality signups

---

# PART 2 — Waitlist Mode Update (apply these changes on top of Part 1)

## 2.1 Global string replacements

Apply these find/replace pairs across **every** section (Top banner, Hero, Pricing, Final CTA, FAQ, Modal, Footer, Welcome email):

| Old (Trial mode) | New (Waitlist mode) |
|---|---|
| `Start 14-day free trial` | `Reserve my Founding seat` |
| `Start your 14-day free trial` | `Reserve your Founding seat` |
| `Claim my Founding seat` | `Reserve my Founding seat` |
| `Claim your Founding seat` | `Reserve your Founding seat` |
| `Claim a seat →` | `Reserve a seat →` |
| `No credit card for 14 days` | `No payment now — we email you at launch` |
| `No credit card required` | `No payment required to reserve` |
| `Cancel anytime, one click` | `Unsubscribe anytime, one click` |
| `First digest at 7:30 AM tomorrow` | `Locked at $99/mo for life when we launch` |
| `tomorrow at 7:30 AM` | `the day we launch` |
| `tomorrow's digest` | `your first digest at launch` |
| `14-day free trial` | `Founding 50 waitlist` |
| `Start free trial` | `Reserve my seat` |

## 2.2 Section-by-section copy changes

### S0 — Top Founding banner (sticky under nav)

**Old:**
```
🎟️  Founding 50: first 50 recruiters lock in $99/mo for life. 37 seats left. Claim a seat →
```
**New:**
```
🎟️  Founding 50 waitlist: first 50 sign-ups lock in $99/mo for life. 37 seats left. Reserve a seat →
```

### S1 — Hero

- **H1** unchanged
- **Subhead** unchanged
- **Primary CTA button**: `Reserve my Founding seat`
- **Trust line below CTA** (replace existing):
  ```
  No payment now  ·  Locked at $99/mo for life  ·  Founding 50 closes at 50
  ```

### S3 — Product section

If any copy mentions "tomorrow at 7:30 AM" or "your first digest tomorrow", change to:
```
The day we launch, your first digest lands at 7:30 AM — 5 pre-vetted
job orders, win-rate scored, before your competitors finish their coffee.
```

### S8 — Pricing section

- Big `$99/month` number → unchanged
- "for life" yellow highlight → unchanged
- **Sub-copy under price** (replace):
  ```
  No payment until we launch. You're reserving the price,
  not buying the product.
  ```
- **Card CTA button**: `Reserve my Founding seat`
- **Trust bullets under card** (replace all three):
  ```
  ✓ Locked at $99/mo for life — even when public pricing hits $199
  ✓ No payment now — pay only when we launch
  ✓ Unsubscribe anytime
  ```

### S10 — FAQ

**Insert TWO new items at the top** (before all existing items):

**Q: When does JobOrders actually launch?**
> We're heads-down building. Target launch: Q3 2026. Reserving a Founding seat now means we email you the moment your first digest is ready to ship — and you're locked at $99/mo for life from that day forward.

**Q: Do I pay anything now?**
> No. Reserving a seat costs $0 and requires no credit card. You're reserving the **price** ($99/mo for life), not buying the product yet. We'll send a magic link to activate billing only when the product launches.

**Modify / delete existing items:**
- "What happens after the 14-day trial?" → **DELETE**
- Any mention of "credit card" in remaining FAQs → reframe to "we'll ask for payment only when we launch"
- Any mention of "tomorrow" → reframe to "at launch"

### S11 — Final CTA section (deep purple bookend)

- **H2**: `Reserve your Founding seat before pricing doubles.`
- **Sub**: `First 50 sign-ups lock in $99/mo for life. Pay nothing until launch.`
- **Button**: `Reserve my Founding seat →`
- **Trust line below button**:
  ```
  No payment now  ·  Locked at $99/mo for life  ·  Magic link at launch
  ```

### Footer

- If footer contains "Start your free trial" CTA → change to `Reserve my Founding seat`
- Remove any "Cancel anytime" badge; keep "Unsubscribe anytime"

## 2.3 Welcome email (D2.6) — modify body

**Subject** (unchanged): `You're in. Seat #{N} of 50.`

**Body** (replace existing body entirely):

```
Welcome to the Founding 50 waitlist, {{first_name}}.

You're seat #{N}. {{50 - N}} left for the rest of the
recruiting world.

What happens next:

1. We're heads-down building. Target launch: Q3 2026.
2. The day we ship, you get an email with a magic link
   to activate your account.
3. Your price is locked from that day forward:
   $99/month, for life, even when public pricing hits $199.
4. Until launch, expect 1 update email per month —
   progress, not noise.

You don't pay anything until you activate. Reply to this
email anytime — it comes to me directly.

— {{founder_name}}, Founder, JobOrders
```

## 2.4 Modal — Replace each state with the Waitlist version

### Default state — Founding variant (replace the copy in Section 1.2)

```
[Badge]              🎟️  FOUNDING 50 WAITLIST · {N} seats left
[H2]                 Reserve your Founding seat.
[Subhead]            We're launching in Q3 2026. First 50 sign-ups
                     lock in $99/mo for life — even when public
                     pricing hits $199.
[Field label]        Work email
[Input placeholder]  you@youragency.com
[Primary button]     Reserve my seat →
[Trust bullets]      ✓ No payment now — pay only when we launch
                     ✓ Locked at $99/mo for life
                     ✓ Unsubscribe anytime, one click
[Footer link]        Already reserved? Resend my confirmation
```

### Default state — Standard variant (when Founding 50 is full)

```
[H2]                 Join the launch waitlist.
[Subhead]            Get notified the moment JobOrders ships.
                     Public pricing: $199/mo at launch.
[Primary button]     Notify me at launch →
[Trust bullets same as above, drop "Locked at $99/mo for life"]
```

Remove the yellow Founding badge in Standard variant.

### Loading state

Button text: `⟳  Reserving your seat...` (unchanged)

### Success state (replace the copy in Section 1.5)

```
[Big icon]           🎟️ (96px)
[H2]                 You're in. Seat #{N} of 50.
[Body]               Check your inbox — we just sent a confirmation
                     email. The day we launch (target: Q3 2026),
                     you'll get a magic link to activate.

                     Your price is locked from that day forward:
                     $99/mo, for life, even when public pricing
                     hits $199.

[Eyebrow]            WHILE YOU'RE HERE…
[Body]               Drop your LinkedIn so we can tailor your
                     digest before launch day.
[Input placeholder]  linkedin.com/in/yourname
[Primary button]     Save & continue →
[Skip link]          Skip — I'll do this later
```

### Waitlist state (50 seats full) — replace the copy in Section 1.6

```
[H2]                 Founding 50 is full.
[Body]               But you can still get the next tier at
                     $129/mo for life (Charter Members) before
                     public pricing hits $199 at launch.

                     You're #{N} on the Charter Members waitlist.
                     We'll email you the moment that tier opens.

[Primary button]     Got it →
```

### Error states (replace the copy in Section 1.7)

**Invalid email** (frontend):
```
That doesn't look like a valid work email. Try again?
```

**Already on waitlist** (backend):
```
[H2]                 You're already on the list.
[Body]               This email is already reserved (seat #{N}).
                     Want us to resend your confirmation?
[Primary button]     Resend my confirmation →
[Secondary link]     Use a different email
```

**Generic error** (network/backend):
```
Something broke on our end. Please try again, or email
founder@joborders.com — that goes straight to me.
```

## 2.5 What stays exactly the same

Do **not** touch these — they remain correct in Waitlist mode:

- All design tokens (colors, fonts, spacing, radii, shadows)
- All section layouts and visual hierarchy
- The Founding 50 yellow badge styling
- Seat counter mechanism (`{N} seats left`) — only the surrounding copy changes
- Hero phone mockup design
- Dark Opportunities purple moat section
- Comparison table
- "Built For" personas section
- Modal visual specs in Section 1.3 (480px width, 20px radius, animations)
- Focus trap, ARIA dialog, focus restoration, ESC close behaviors
- Mobile responsive rules (iOS 16px+ input, bottom sheet option)
- All hover states, transitions, and interactions
- Backend integration architecture (atomic seat counter, Slack notification, magic link email)

---

## 3. Acceptance checklist

Verify after the update:

- [ ] No occurrence of "14-day free trial" anywhere on the site
- [ ] No occurrence of "credit card" anywhere on the site
- [ ] No occurrence of "tomorrow at 7:30 AM" — only "the day we launch"
- [ ] Every CTA button across the site reads `Reserve my Founding seat` (or `Notify me at launch` in Standard variant)
- [ ] Founding banner reads "Founding 50 waitlist"
- [ ] Modal Default state badge reads "FOUNDING 50 WAITLIST"
- [ ] Welcome email body matches Section 2.3 of this doc
- [ ] Two new FAQ items inserted at top (launch timing + payment now)
- [ ] Old FAQ "what happens after the 14-day trial" is removed
- [ ] All trust bullets updated (no "credit card", no "cancel anytime")
- [ ] Magic link copy reflects "at launch" timing, not "5 minutes from now"
- [ ] All 5 modal states (default / loading / success / waitlist / error) implemented per Section 2.4
- [ ] Visual specs from Section 1.3 (Original spec) are preserved — only copy changes
