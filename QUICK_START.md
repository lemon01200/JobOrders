# JobOrders - Quick Start Guide

## 🚀 What Was Built

A complete marketing website for JobOrders in **Waitlist Mode** with a fully functional signup modal.

### Key Features

✅ **11-section homepage** - Hero, Pain, Product, How, Why, Moat, Built For, Pricing, Proof, FAQ, Final CTA  
✅ **Waitlist signup modal** - 5 complete states (default, loading, success, error, already registered)  
✅ **Global modal state** - React Context integration, triggers from any CTA  
✅ **Responsive design** - Desktop, tablet, mobile with sticky mobile CTA  
✅ **Full accessibility** - ARIA, focus trap, keyboard navigation  
✅ **Email templates** - All confirmation and welcome emails documented  

---

## 📋 What Changed from Trial Mode

The website was converted from "14-day free trial" → "Waitlist reservation":

### Before (Trial Mode)
- "Start 14-day free trial"
- "No credit card required"
- "First digest tomorrow at 7:30 AM"
- Users sign up and immediately get access

### After (Waitlist Mode)
- "Reserve my Founding seat"
- "No payment now — pay only when we launch"
- "Your first digest lands the day we launch"
- Users reserve $99/mo price but pay nothing until Q3 2026 launch

**All changes documented in**: `WAITLIST_MODE_CHANGES.md`

---

## 🎯 How to Use the Modal

### Opening the Modal

The modal automatically opens when users click any of these CTAs:

1. **Top Founding banner** - "Reserve a seat →"
2. **Hero primary button** - "Reserve my Founding seat"
3. **Navigation button** - "Reserve seat"
4. **Pricing card** - "Reserve my Founding seat"
5. **Final CTA** - "Reserve my Founding seat →"
6. **Mobile sticky CTA** - "Reserve" (appears after 600px scroll)
7. **Sample page CTAs** - Both sticky banner and bottom CTA

### Modal Variants

```typescript
// Founding variant (default) - Shows yellow badge, $99/mo for life
openModal('founding');

// Standard variant - For when Founding 50 is full
openModal('standard');
```

### Modal States

The modal has 5 complete states:

1. **Default** - Email input form with trust bullets
2. **Loading** - "Reserving your seat..." with spinner
3. **Success** - "You're in. Seat #N of 50." with LinkedIn collection
4. **Already Registered** - "You're already on the list" with resend option
5. **Error** - Generic error with retry

---

## 🔧 Configuration

### Founding Seats Counter

Location: `/src/app/config.ts`

```typescript
export const FOUNDING_SEATS_LEFT = 37;
```

**Update this value** as seats are reserved. It appears in:
- Top banner: "37 seats left"
- Modal badge: "37 seats left"
- Success state: "Seat #N of 50"

### Site Config

```typescript
export const SITE_CONFIG = {
  name: 'JobOrders',
  tagline: 'Pre-vetted job orders in your inbox...',
  pricing: {
    standard: 199,
    founding: 99,
  },
};
```

---

## 📧 Email Templates

All email templates are documented in: `/EMAIL_TEMPLATES.md`

### Available Templates

1. **Welcome Email** - Sent immediately after signup
   - Subject: "You're in. Seat #N of 50."
   - Confirms reservation and explains next steps

2. **Resend Confirmation** - When user clicks "Resend my confirmation"
   - Subject: "Here's your confirmation — Seat #N of 50"
   - Shows seat number and reservation date

3. **Charter Members** - When Founding 50 is full
   - Subject: "You're on the Charter Members list"
   - Offers $129/mo tier instead

4. **Monthly Update** - Progress emails until launch
   - Subject: "Update #N — What we shipped this month"
   - Keeps waitlist engaged

5. **Launch Day** - Magic link to activate
   - Subject: "🚀 JobOrders is live — Activate your account"
   - Starts billing at $99/mo

---

## 🔌 Backend Integration

The modal currently uses **mock data**. To make it production-ready:

### 1. Create API Endpoint

```typescript
POST /api/waitlist
Body: {
  email: string;
  variant: 'founding' | 'standard';
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  referrer?: string;
}

Response: {
  success: boolean;
  seatNumber: number;
  tier: 'founding' | 'charter' | 'standard';
}
```

### 2. Database Schema

```sql
CREATE TABLE waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  seat_number INTEGER NOT NULL,
  tier VARCHAR(20) NOT NULL,
  reserved_at TIMESTAMP DEFAULT NOW(),
  linkedin_url VARCHAR(255),
  utm_source VARCHAR(100),
  utm_medium VARCHAR(100),
  utm_campaign VARCHAR(100)
);
```

### 3. Update Modal Component

In `/src/app/components/SignupModal.tsx`, replace the mock API call:

```typescript
// Current (line ~105)
await new Promise(resolve => setTimeout(resolve, 1500));

// Replace with:
const response = await fetch('/api/waitlist', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email, variant })
});
const data = await response.json();
```

### 4. Send Welcome Email

```typescript
// After successful signup
await sendEmail({
  to: email,
  from: 'founder@joborders.com',
  subject: `You're in. Seat #${seatNumber} of 50.`,
  html: renderWelcomeEmail({ firstName, seatNumber })
});
```

---

## 🎨 Design Tokens

All design tokens are in `/src/styles/theme.css`:

### Colors
```css
--ink: #0B0F19;              /* Body text */
--surface: #FFFFFF;          /* Background */
--soft-surface: #F6F5F0;     /* Warm off-white */
--brand-primary: #1E5EFF;    /* Inbox blue */
--brand-secondary: #FF6A2C;  /* Coffee orange */
--founding-yellow: #FBBF24;  /* Founding badge */
--win-green: #16A34A;        /* High win rate */
--win-amber: #F59E0B;        /* Medium win rate */
--dark-opp-purple: #7C3AED;  /* Dark opportunities */
```

### Typography
```css
--font-sans: 'Inter';              /* Body, headings */
--font-serif: 'Source Serif 4';    /* Italic accents */
--font-mono: 'IBM Plex Mono';      /* Numbers, win rates */
```

---

## ✅ Testing Checklist

Before deploying to production:

### Modal Functionality
- [ ] Click all CTA buttons - modal opens
- [ ] Enter valid email - button enables
- [ ] Enter invalid email - error shows
- [ ] Submit form - loading state appears
- [ ] Success state - seat number displays
- [ ] LinkedIn input - optional, can skip
- [ ] Close modal with ✕ button
- [ ] Close modal with overlay click
- [ ] Close modal with ESC key
- [ ] Email persists in sessionStorage

### Responsive Design
- [ ] Desktop (1280px+) - all sections look correct
- [ ] Tablet (768-1023px) - layout adapts
- [ ] Mobile (<768px) - single column, readable
- [ ] Mobile sticky CTA appears after scroll
- [ ] Modal fits on mobile (100vw - 32px)

### Accessibility
- [ ] Tab key moves focus through modal
- [ ] ESC key closes modal
- [ ] Focus returns to trigger button after close
- [ ] Screen reader announces modal
- [ ] All buttons have focus indicators
- [ ] Form errors are announced

### Content Verification
- [ ] No "14-day free trial" anywhere
- [ ] No "credit card" (except "no credit card")
- [ ] No "tomorrow at 7:30 AM"
- [ ] All CTAs say "Reserve my Founding seat"
- [ ] FAQ has 2 new questions at top
- [ ] Founding banner says "waitlist"

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── SignupModal.tsx        ⭐ Waitlist modal (5 states)
│   │   ├── Navigation.tsx         Updated with modal triggers
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   ├── WinRateBadge.tsx
│   │   ├── SampleDigest.tsx
│   │   ├── SectionContainer.tsx
│   │   └── MobileStickyCTA.tsx
│   ├── context/
│   │   └── ModalContext.tsx       ⭐ Modal state management
│   ├── pages/
│   │   ├── HomePage.tsx           All 11 sections
│   │   ├── SamplePage.tsx
│   │   ├── PlaceholderPage.tsx
│   │   └── NotFoundPage.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── config.ts                  ⭐ FOUNDING_SEATS_LEFT here
│   ├── seo-meta.ts
│   └── App.tsx                    ⭐ ModalProvider wrapper
├── styles/
│   ├── fonts.css
│   ├── theme.css                  All design tokens
│   ├── tailwind.css
│   └── index.css
└── imports/
    └── (spec documents)

Root files:
├── EMAIL_TEMPLATES.md             ⭐ All email templates
├── WAITLIST_MODE_CHANGES.md       ⭐ Complete change log
├── IMPLEMENTATION.md              Original build documentation
├── README.md
└── QUICK_START.md                 This file
```

---

## 🚨 Common Issues

### Modal doesn't open
- Check that component is wrapped in `<ModalProvider>`
- Verify `useModal()` hook is being called
- Check console for errors

### Email validation fails
- Make sure input type is `email`
- Validation regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

### SessionStorage not persisting
- Check browser privacy settings
- Verify sessionStorage is available
- Key used: `'signup_email'`

### Founding counter not updating
- Update `/src/app/config.ts`
- Check that value is imported correctly
- Refresh page to see changes

---

## 📞 Support

For questions or issues:

1. **Implementation details**: See `WAITLIST_MODE_CHANGES.md`
2. **Original spec**: See `JobOrders-Website-Spec-EN.md`
3. **Waitlist spec**: See `Modal-Waitlist-Combined.md`
4. **Email templates**: See `EMAIL_TEMPLATES.md`

---

## 🎉 You're Ready!

The website is fully functional and ready for backend integration. All copy has been updated to waitlist mode, the modal is complete with all 5 states, and email templates are documented.

**Next steps:**
1. Review the modal in browser
2. Set up backend API endpoint
3. Integrate email service (Resend/Postmark/SendGrid)
4. Add analytics tracking
5. Deploy to production

Good luck with the launch! 🚀
