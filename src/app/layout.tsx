import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';

import { siteConfig } from '@/configs/site';
import { PRODUCTION_BASE_URL_WITH_PROTOCOL } from '@/constants';
import { Providers } from '@/providers';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(PRODUCTION_BASE_URL_WITH_PROTOCOL),
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  twitter: {
    creator: '@hugoo',
  },
  openGraph: {
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    siteName: siteConfig.metadata.siteName,
    // images: [
    //   {
    //     url: getDefaultOgImageUrl(),
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <div>
              <h1 className="text-2xl font-bold">
                <Link href="/" className="hover:underline">
                  🪝🥷 Hook.ninja
                </Link>
              </h1>
            </div>
            <main className="h-full w-full flex flex-col gap-8 row-start-2 items-center sm:items-start">
              {children}
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
              <div className="text-gray-400 w-full block">
                <div className="text-center flex gap-4 py-4 w-full justify-center px-10">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium hover:underline underline-offset-4"
                  >
                    Contribute on GitHub
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
