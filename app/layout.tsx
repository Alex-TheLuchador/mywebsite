import type { Metadata } from 'next';
import { VT323 } from 'next/font/google';
import { content } from '@/lib/content';
import './globals.css';

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mono',
});

const { identity, seo } = content;

export const metadata: Metadata = {
  title: seo.pageTitle,
  description: seo.description,
  keywords: seo.keywords,
  openGraph: {
    title: seo.pageTitle,
    description: seo.description,
    url: seo.siteUrl,
    siteName: `${identity.name} | ${identity.title}`,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: seo.pageTitle,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: seo.siteUrl,
  },
};

// JSON-LD structured data — feeds Google's Knowledge Panel and AI search results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: identity.name,
  jobTitle: identity.title,
  description: seo.description,
  url: seo.siteUrl,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Orange County',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  sameAs: [
    content.links.linkedin,
    content.links.github,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={vt323.variable}>{children}</body>
    </html>
  );
}
