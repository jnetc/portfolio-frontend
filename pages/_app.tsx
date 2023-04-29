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

        <meta name="robots" content="index,follow"/>

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
        <link rel="alternate" href="https://www.devan.fi/ru/" hrefLang="ru" />
        <link rel="alternate" href="https://www.devan.fi/en/" hrefLang="en" />

        {/* Favicon */}
        <link rel="icon" href="/icons/favicon.ico" type="image/x-icon"/>
        <link rel="shortcut icon" href="/icons/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icons/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icons/favicon-48x48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icons/favicon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="icon" href="/icons/favicon-192x192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icons/favicon-512x512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon-180x180.png" type="image/png" sizes="180x180"/>
        <link rel="apple-touch-icon-precomposed" href="/icons/apple-touch-icon-57x57.png" type="image/png" sizes="57x57"/>


        {/* Others */}
        <meta name="format-detection" content="telephone=no, address=no" />
        <meta name="rating" content="General" />
        <meta name="generator" content="Next.js" />
      </Head>

      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTIC}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GOOGLE_ANALYTIC}');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
