/**
 * content.ts — single source of truth for all user-facing text, URLs, and SEO metadata.
 * This is the only file you need to edit to update what visitors see or how the site appears
 * in search engines and social media previews.
 */

export const content = {

  // ─── Identity ────────────────────────────────────────────────────────────────
  // Your name, title, and location. Used in the terminal, page metadata, and structured data.

  identity: {
    name: 'Alex Hernandez',
    title: 'AI Engineer',
    location: 'Orange County, CA',
  },

  // ─── SEO ─────────────────────────────────────────────────────────────────────
  // Controls how your site appears in Google, Bing, and AI-driven search results.
  // pageTitle:   shown in browser tabs and search result headlines
  // description: shown under your link in search results (keep under ~155 chars)
  // keywords:    hint to search engines; focus on terms clients actually search for
  // siteUrl:     your live domain, no trailing slash — used in sitemap and OG tags

  seo: {
    pageTitle: 'Alex Hernandez | AI Engineer — Orange County, CA',
    description: 'Microsoft-certified AI engineer based in Orange County, CA. Specializing in AI integration, automation, and custom LLM solutions for businesses.',
    keywords: [
      'AI engineer',
      'AI consultant',
      'machine learning engineer',
      'LLM integration',
      'AI automation',
      'Orange County AI engineer',
      'Southern California AI consultant',
      'Microsoft certified AI',
    ],
    siteUrl: 'https://yourdomain.com', // ← update with your real domain
  },

  // ─── Terminal: about ─────────────────────────────────────────────────────────

  about: {
    name: 'Alex Hernandez',
    title: 'AI Engineer',
    bio: 'Born in Houston, Texas and currently based in Orange County, California, I\'m an AI engineer certified by Microsoft.',
  },

  // ─── Terminal: services ───────────────────────────────────────────────────────
  // Also rendered as hidden crawlable text for SEO — keep it substantive.

  services: {
    body: '[Placeholder — describe your AI engineering work and services here]',
  },

  // ─── Terminal: certifications ─────────────────────────────────────────────────

  certifications: {
    details: '[Placeholder — add your certification name and details here]',
    verificationUrl: 'https://learn.microsoft.com/en-us/users/[your-profile]/credentials',
    verificationLabel: 'Verify on Microsoft Learn',
  },

  // ─── External links ───────────────────────────────────────────────────────────

  links: {
    github: 'https://github.com/[your-handle]',
    linkedin: 'https://linkedin.com/in/[your-handle]',
  },

};
