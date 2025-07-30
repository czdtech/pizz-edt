import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Pizza Edition - Free HTML5 Games Collection',
    template: '%s | Pizza Edition'
  },
  description: 'Play 38+ free HTML5 games instantly in your browser! Featuring popular games like Among Us, Fireboy and Watergirl, Geometry Dash, Temple Run 2, and more. No downloads required - just click and play!',
  keywords: [
    'HTML5 games',
    'free online games',
    'browser games',
    'no download games',
    'pizza edition',
    'among us online',
    'fireboy watergirl',
    'geometry dash',
    'temple run 2',
    'fruit ninja',
    'rocket league',
    '2048 game',
    'casual games',
    'puzzle games',
    'action games',
    'adventure games',
    'racing games',
    'strategy games',
    'multiplayer games',
    'instant play games'
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
  metadataBase: new URL('https://pizzaedition.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pizzaedition.com',
    title: 'Pizza Edition - Free HTML5 Games Collection',
    description: 'Play 38+ free HTML5 games instantly in your browser! Featuring popular games like Among Us, Fireboy and Watergirl, Geometry Dash, Temple Run 2, and more. No downloads required!',
    siteName: 'Pizza Edition',
    images: [
      {
        url: 'https://pizzaedition.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pizza Edition - Free HTML5 Games Collection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pizza Edition - Free HTML5 Games Collection',
    description: 'Play 38+ free HTML5 games instantly in your browser! No downloads required - just click and play!',
    creator: '@pizzaedition',
    images: ['https://pizzaedition.com/twitter-image.jpg'],
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
    'google-site-verification': 'your-google-verification-code',
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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}