import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
// @ts-expect-error Next.js processes this global stylesheet import at build time.
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'Joenn S. Aquilino | Full Stack Developer',
    template: '%s | Joenn S. Aquilino',
  },
  description:
    'Full Stack Developer with 5+ years of experience building business systems, web applications, and AI-enabled tools. Specializing in React, Laravel, Next.js, and AI/LLM integration.',
  keywords: [
    'Full Stack Developer',
    'Web Developer',
    'React Developer',
    'Laravel Developer',
    'Next.js Developer',
    'PHP Developer',
    'AI Developer',
    'Software Engineer',
    'Philippines',
    'Freelance Developer',
  ],
  authors: [{ name: 'Joenn S. Aquilino' }],
  creator: 'Joenn S. Aquilino',
  publisher: 'Joenn S. Aquilino',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://joenn.vercel.app/',
    siteName: 'Joenn S. Aquilino | Full Stack Developer',
    title: 'Joenn S. Aquilino | Full Stack Developer',
    description:
      'Full Stack Developer with 8+ years of experience building business systems, web applications, and AI-enabled tools.',
    images: [
      {
        url: 'https://joenn.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Joenn S. Aquilino - Full Stack Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joenn S. Aquilino | Full Stack Developer',
    description:
      'Full Stack Developer with 8+ years of experience building business systems, web applications, and AI-enabled tools.',
    images: ['https://joenn.vercel.app/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://joenn.vercel.app/',
  },
  category: 'technology',
  classification: 'Portfolio',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>{children}</body>
    </html>
  );
}