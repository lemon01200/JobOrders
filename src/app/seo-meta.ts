// Part 4 - SEO / Meta tags
// These should be added to the document head in production

export const SEO_CONFIG = {
  title: 'JobOrders — Pre-vetted job orders in your inbox every morning',
  description:
    'JobOrders is the AI-powered BD engine for independent recruiters and boutique agencies. 5 scored, fresh job orders in your inbox by 7:30 AM — before your competitors finish their coffee.',

  openGraph: {
    title: 'Pre-vetted job orders in your inbox before your competitors finish their coffee.',
    description:
      'Stop hunting for job orders. Start receiving them. The BD engine built for independent recruiters.',
    type: 'website',
    url: 'https://joborders.com/',
    image: 'https://joborders.com/og/og-inbox-mockup.png',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Pre-vetted job orders in your inbox before your competitors finish their coffee.',
    description:
      'The BD engine for independent recruiters. 5 scored job orders by 7:30 AM, every weekday.',
    image: 'https://joborders.com/og/og-inbox-mockup.png',
  },

  schema: {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'JobOrders',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '199',
      priceCurrency: 'USD',
    },
    description:
      'AI-powered job order delivery service for independent recruiters and boutique recruiting agencies in the US.',
  },
} as const;

// Target keywords for SEO
export const KEYWORDS = {
  primary: [
    'job orders for recruiters',
    'independent recruiter BD tool',
    'business development for recruiters',
  ],
  secondary: [
    'boutique recruiting agency software',
    'find job orders',
    'recruiter lead generation',
  ],
  longTail: [
    'how to find new clients as a recruiter',
    'cold email hiring manager template',
  ],
} as const;
