import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import '@Styles/globals.css';

export const GOOGLE_ANALYTIC = process.env.NEXT_PUBLIC_GOOGLE_ANALYTIC as string;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        {/* App PWA */}
        <meta name="application-name" content="devan.fi" />
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/manifest.webmanifest" />
        {/* Theme */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f0e9db" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#18171c" />
        {/* Links */}
        <link rel="canonical" href="https://devan.fi" />
        <link rel="alternate" href="https://devan.fi" hrefLang="x-default" />
        <link rel="alternate" href="https://devan.fi/ru" hrefLang="ru" />
        <link rel="alternate" href="https://devan.fi/en" hrefLang="en" />
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icons/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icons/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" />
        {/* Apple */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="devan.fi" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />

        <meta name="format-detection" content="telephone=no, address=no" />
        <meta name="generator" content="Next.js" />
        <meta name="google" content="notranslate" />
      </Head>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTIC}`} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
