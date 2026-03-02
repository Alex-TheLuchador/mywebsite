import type { Metadata } from 'next';
import { VT323 } from 'next/font/google';
import './globals.css';

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Alex H. | AI Engineer',
  description: 'Alex H. is the AI engineer that brings genuine results.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={vt323.variable}>{children}</body>
    </html>
  );
}
