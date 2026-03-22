import type { Metadata } from 'next';
import { Inter, Kanit, Roboto } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'], variable: '--font-content' });

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-heading',
});

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-logo',
});

export const metadata: Metadata = {
  title: {
    default: 'Trackz - Smart CRM Solution',
    template: '%s | Trackz',
  },
  description: 'CRM that works for you, not the other way around. Lightweight, customizable and powered by AI. The smart solution tool for your business.',
  keywords: ['CRM', 'customer relationship management', 'sales automation', 'email marketing', 'business tools', 'AI-powered'],
  authors: [{ name: 'Trackz' }],
  creator: 'Trackz',
  publisher: 'Trackz',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://trackz-crm.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Trackz',
    title: 'Trackz - Smart CRM Solution',
    description: 'CRM that works for you, not the other way around. Lightweight, customizable and powered by AI.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trackz - Smart CRM Solution',
    description: 'CRM that works for you, not the other way around. Lightweight, customizable and powered by AI.',
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
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, roboto.variable, kanit.variable)}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
