import './globals.css';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata: Metadata = {
  title: {
    default: 'Pizza Edition - No Ads Games Ad Free HTML5 Games',
    template: '%s | Pizza Edition'
  },
  description: 'Play Pizza Edition No Ads Games and free in your browser! Featuring popular games like Among Us, Fireboy and Watergirl, Geometry Dash, and more.',
  keywords: [
    'HTML5 games',
    'free online games',
    'browser games',
    'Pizza Edition'
  ].join(', '),
  authors: [{ name: 'Pizza Edition Team' }],
  creator: 'Pizza Edition',
  publisher: 'Pizza Edition',
  applicationName: 'Pizza Edition',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.baseUrl,
    title: 'Pizza Edition - Free HTML5 Games Collection',
    description: 'Play Pizza Edition No Ads Games and free in your browser! Featuring popular games like Among Us, Fireboy and Watergirl, Geometry Dash, and more.',
    siteName: 'Pizza Edition',
    images: [
      {
        url: `${SITE_CONFIG.baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Pizza Edition - Free HTML5 Games Collection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pizza Edition - Free HTML5 Games Collection',
    description: 'Play Pizza Edition No Ads Games and free in your browser! Featuring popular games like Among Us, Fireboy and Watergirl, Geometry Dash, and more.',
    creator: '@pizzaedition',
    images: [`${SITE_CONFIG.baseUrl}/twitter-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  other: {
    'google-site-verification': 'your-google-verification-code ',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-inter">{children}</body>
    </html>
  );
}