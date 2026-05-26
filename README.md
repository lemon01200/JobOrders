# JobOrders - Marketing Website (Waitlist Mode)

A production-ready marketing website for JobOrders, built with React, TypeScript, and Tailwind CSS v4.

**Current Mode**: Waitlist / Pre-launch  
**Launch Target**: Q3 2026  
**Founding 50 Offer**: First 50 sign-ups lock in $99/mo for life (vs. $199 public pricing)

## Overview

This website implements the complete JobOrders marketing site with **Waitlist Mode** conversion:

- **Original spec**: `JobOrders-Website-Spec-EN.md` (Trial mode)
- **Waitlist update**: `Modal-Waitlist-Combined.md` (Pre-launch mode)
- **Implementation details**: See `WAITLIST_MODE_CHANGES.md`

### What Changed

The site was converted from "Start 14-day free trial" → "Reserve Founding seat" to reflect pre-launch status. Users can now reserve their spot at $99/mo for life with **no payment until launch**.

## Tech Stack

- **React 18.3.1** with TypeScript
- **Tailwind CSS 4.x** with custom design tokens
- **React Router 7.x** for routing
- **Motion** (Framer Motion) for animations
- **Lucide React** for icons

## Pages

### Main Pages
- `/` - Homepage with all 11 sections
- `/sample` - Sample digest landing page with niche switcher

### Placeholder Pages
- `/signup` - Trial signup (stub)
- `/login` - Login (stub)
- `/about` - About page (stub)
- `/blog` - Recruiter Playbook (stub)
- `/privacy` - Privacy policy (stub)
- `/terms` - Terms of service (stub)
- `/contact` - Contact page (stub)
- `*` - 404 page (branded)

## Component Structure

### Core Components
- `Button.tsx` - Primary and secondary button variants (Part 2.6)
- `WinRateBadge.tsx` - Color-coded win rate scoring display
- `SectionContainer.tsx` - Section wrapper with padding and background variants
- `SampleDigest.tsx` - Complete email digest component (Part 7)
- `Navigation.tsx` - Top navigation with Founding 50 banner
- `Footer.tsx` - Site footer with links

### Pages
- `HomePage.tsx` - All 11 homepage sections
- `SamplePage.tsx` - Sample digest landing page
- `PlaceholderPage.tsx` - Reusable placeholder component
- `NotFoundPage.tsx` - 404 error page

## Design System

All design tokens are defined in `/src/styles/theme.css` following the spec Part 2.5:

### Color Palette
- Ink: `#0B0F19` - Body text
- Surface: `#FFFFFF` - Default background
- Soft surface: `#F6F5F0` - Warm off-white sections
- Brand primary: `#1E5EFF` - Inbox blue
- Brand secondary: `#FF6A2C` - Coffee/urgency accent
- Win colors: Green `#16A34A`, Amber `#F59E0B`, Grey `#6B7280`
- Dark opp purple: `#7C3AED`
- Deep purple gradient: `#1A1033 → #2D1B5C`
- Founding yellow: `#FBBF24`
- Hairline: `#E6E3DA` - Borders

### Typography
- **Sans**: Inter (body, headings)
- **Serif**: Source Serif 4 Italic (accent phrases)
- **Mono**: IBM Plex Mono (numeric values, win rates, commission)

Fonts are loaded from Google Fonts in `/src/styles/fonts.css`.

### Responsive Grid
- Desktop: 12 columns, max 1280px, 80px gutter
- Tablet: 8 columns, max 768px, 48px gutter
- Mobile: 4 columns, 100% width, 20px gutter

## Configuration

### Founding Seats Counter
Location: `/src/app/config.ts`
```typescript
export const FOUNDING_SEATS_LEFT = 37;
```
Update this value to reflect remaining Founding 50 seats. This is displayed in:
- Top banner
- Pricing section

## Image Placeholders

The following images are referenced but not generated (see spec Part 8 for AI generation prompts):

### Required Images
All images should be placed in `/public/img/`:

1. `hero-inbox-mockup.png` - Hero phone mockup (1200×750)
2. `digest-fullsize.png` - Full digest mockup (480×1200)
3. `og-inbox-mockup.png` - Open Graph image (1200×630)
4. `illu-solo.svg` - Solo recruiter illustration (160×160)
5. `illu-team.svg` - Team illustration (160×160)
6. `illu-niche.svg` - Niche specialist illustration (160×160)
7. `founding-badge.svg` - Founding 50 badge (64×64)
8. `icon-dark-opp.svg` - Dark opportunity icon (24×24)

**Note**: The phone mockup in Section 1 and email frame in Section 3 are rendered as live HTML/CSS using the SampleDigest component, not as images.

### Replacing Placeholders
Currently, illustration placeholders in Section 7 (Built For) use emoji icons. Replace with actual SVG illustrations per the spec.

## Section Implementation

Each section of the homepage implements specific requirements from Part 5 of the spec:

1. **Hero** - H1 with serif italic accent, phone mockup, Founding banner
2. **Pain** - 3-column pain points, transition quote
3. **Product** - Email frame + features
4. **How It Works** - 4-step process
5. **Why** - Comparison table
6. **Moat** - Dark opportunities (purple gradient background)
7. **Built For** - 3 audience segments
8. **Pricing** - Founding card + ROI calculator
9. **Proof** - Social proof stats
10. **FAQ** - Accordion with 8 questions
11. **Final CTA** - Purple gradient bookend

## Interactions (Part 9)

Implemented interactions:
- Hover effects on buttons (color transitions)
- FAQ accordion (native `<details>/<summary>`)
- Comparison table row highlights
- Dark Opp card button reveals on hover
- Focus rings (2px brand-primary) on interactive elements
- Smooth transitions (200ms ease-out)

## Accessibility

- Minimum font size: 16px
- Color contrast: All text meets WCAG AA standards
- Keyboard navigation: All interactive elements reachable
- Focus indicators: 2px brand-primary outline
- Native semantics: `<details>/<summary>` for FAQ
- Reduced motion: Respects `prefers-reduced-motion`

## Development

The Vite dev server is already running in this environment. Any changes will hot-reload automatically.

**Important**: Do NOT run `vite build` or `npm run build` - this environment uses a special build process.

## Known Deviations

None. The implementation follows the spec exactly.

## Meta Tags & SEO

The following meta tags should be added to the document head in production (see spec Part 4):

- Title: "JobOrders — Pre-vetted job orders in your inbox every morning"
- Description: "JobOrders is the AI-powered BD engine for independent recruiters..."
- Open Graph and Twitter Card tags
- Schema.org JSON-LD for SoftwareApplication

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive: Mobile (390px), Tablet (820px), Desktop (1280px+)

## License

Proprietary - JobOrders 2026
