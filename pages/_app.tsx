import type { AppProps } from 'next/app';
import Head from 'next/head';
// import Script from 'next/script';
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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="devan.fi" />
        <link rel="manifest" href="/manifest.webmanifest" />

        {/* Theme */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f0e9db" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#18171c" />

        {/* Links */}
        <link rel="alternate" href="https://www.devan.fi/" hrefLang="fi" />
        <link rel="alternate" href="https://www.devan.fi/ru/" hrefLang="ru" />
        <link rel="alternate" href="https://www.devan.fi/en/" hrefLang="en" />

        {/* Favicon */}
        <link rel="shortcut icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icons/favicon-48x48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icons/favicon-192x192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icons/favicon-512x512.png" type="image/png" sizes="512x512" />
        <link rel="icon" href="/icons/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/icons/favicon-180×180.png" type="image/png" sizes="180×180" />

        {/* Others */}
        <meta name="format-detection" content="telephone=no, address=no" />
        <meta name="rating" content="General" />
        <meta name="generator" content="Next.js" />
        <meta name="google" content="notranslate" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
