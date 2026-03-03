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
      'AI integration',
      'AI for small businesses',
      'AI for businesses',
      'Orange County AI engineer',
      'Southern California AI consultant',
      'Microsoft certified AI',
    ],
    siteUrl: 'https://hernandezalex.dev', // ← update with your real domain
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
    body: `
    Enterprise-Grade AI Tailored to You.

Most AI automation tools are built for companies with 10,000 employees and a dedicated IT department.

You've probably felt that gap: the tools exist, but none of them were designed with you in mind.

I'm Alex H, a Microsoft Azure Certified AI Engineer who has built and deployed automation systems for some of the world's largest organizations. Now I work exclusively with small businesses and solopreneurs to give them the same competitive edge without the unnecessary complexity, the bloated timelines, or the jargon.

What that means for you:

Every workflow I build is custom. No cookie-cutter templates. No off-the-shelf software you could have bought yourself. 
I analyze how your business actually operates, identify where you're leaking time and money, and engineer an AI solution that slots directly into your existing tools and processes.

My Services Include:

- AI Workflow Automation
  - Eliminate repetitive, manual tasks that are eating your week
- CRM & Sales Pipeline Automation — Never let a lead go cold again
- AI-Powered Customer Communication — Respond faster, sound better, scale your voice
- Document & Reporting Automation — Proposals, invoices, and summaries generated in seconds
- Custom GPT & Chatbot Build-Outs — AI trained on your business, not the whole internet
- Systems Audit & AI Roadmap — Not sure where to start? I'll map it out for you

Ready to start gaining back time, your most valuable asset?

Book a Free 30-Minute Audit.
    `,
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
