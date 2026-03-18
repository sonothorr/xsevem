import type { Metadata } from 'next';
import { Inter, Space_Mono } from 'next/font/google';
import './globals.css'; // Global styles
import SmoothScroller from '@/components/SmoothScroller';
import { CustomCursor } from '@/components/CustomCursor';
import { Preloader } from '@/components/Preloader';
import { ScrollProgress } from '@/components/ScrollProgress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://xsevem.com'),
  title: 'XSEVEM',
  description: 'A XSEVEM é uma agência criativa especializada em design de experiências digitais, branding e desenvolvimento web de alta performance.',
  keywords: [
    'XSEVEM',
    'agência de design',
    'branding',
    'desenvolvimento web',
    'experiência digital',
    'design editorial',
    'portfolio cinemático',
    'criação de sites',
    'São Paulo',
    'Brasil'
  ],
  authors: [{ name: 'XSEVEM', url: 'https://xsevem.com' }],
  creator: 'XSEVEM',
  publisher: 'XSEVEM',
  openGraph: {
    title: 'XSEVEM',
    description: 'Transformamos marcas através de design cinemático, branding estratégico e sites de alta performance.',
    url: 'https://xsevem.com',
    siteName: 'XSEVEM',
    images: [
      {
        url: '/nathan.webp',
        width: 1200,
        height: 630,
        alt: 'XSEVEM - Portfólio de Branding e Web Design',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'XSEVEM',
    description: 'Agência de design focada em criar experiências digitais premium e branding estratégico.',
    images: ['/nathan.webp'],
    creator: '@xsevemx',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: '/iconex.png',
    apple: '/iconex.png',
  },
};

import { PreloaderProvider } from '@/context/PreloaderContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${inter.variable} ${spaceMono.variable}`}>
      <body className="antialiased bg-ds-black text-ds-white overflow-x-hidden selection:bg-ds-white selection:text-ds-black" suppressHydrationWarning>
        <PreloaderProvider>
          <ScrollProgress />
          <SmoothScroller>
            <Preloader />
            {children}
            <CustomCursor />
          </SmoothScroller>
        </PreloaderProvider>
      </body>
    </html>
  );
}
