import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pizza Edition - Free HTML5 Games Collection',
  description: 'Play hundreds of free HTML5 games instantly in your browser. Action, puzzle, casual, adventure games and more!',
  keywords: 'HTML5 games, free games, browser games, online games, casual games, puzzle games, action games',
  authors: [{ name: 'Pizza Edition Team' }],
  creator: 'Pizza Edition',
  publisher: 'Pizza Edition',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pizzaedition.example.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pizzaedition.example.com',
    title: 'Pizza Edition - Free HTML5 Games Collection',
    description: 'Play hundreds of free HTML5 games instantly in your browser. Action, puzzle, casual, adventure games and more!',
    siteName: 'Pizza Edition',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pizza Edition - Free HTML5 Games Collection',
    description: 'Play hundreds of free HTML5 games instantly in your browser. Action, puzzle, casual, adventure games and more!',
    creator: '@pizzaedition',
  },
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