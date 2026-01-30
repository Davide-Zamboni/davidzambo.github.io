import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Davide Zamboni | Software Developer Engineer',
  description: 'Senior Software Engineer at Klarna. Personal website and portfolio showcasing projects in software development, machine learning, and research.',
  keywords: ['Davide Zamboni', 'Software Engineer', 'Klarna', 'Developer', 'Portfolio'],
  authors: [{ name: 'Davide Zamboni' }],
  openGraph: {
    title: 'Davide Zamboni | Software Developer Engineer',
    description: 'Senior Software Engineer at Klarna. Personal website and portfolio.',
    url: 'https://davidzambo.github.io',
    siteName: 'Davide Zamboni',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Davide Zamboni | Software Developer Engineer',
    description: 'Senior Software Engineer at Klarna. Personal website and portfolio.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <div className="container">
          <Header />
          <main className="fade-in">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
