// JobOrders configuration
// Single source of truth for app constants

export const FOUNDING_SEATS_LEFT = 37;

export const SITE_CONFIG = {
  name: 'JobOrders',
  tagline: 'Pre-vetted job orders in your inbox before your competitors finish their coffee.',
  description: 'JobOrders is the AI-powered BD engine for independent recruiters and boutique agencies. 5 scored, fresh job orders in your inbox by 7:30 AM — before your competitors finish their coffee.',
  pricing: {
    standard: 199,
    founding: 99,
  },
} as const;
