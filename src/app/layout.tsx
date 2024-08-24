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
  title: 'Trackz',
  description: 'CRM Solution for your business',
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
