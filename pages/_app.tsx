import Head from 'next/head';
import '@Styles/globals.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />

        <meta name="application-name" content="devan.fi" />
        <meta name="author" content="Anton" />
        <meta name="format-detection" content="telephone=no, address=no" />
        <meta name="generator" content="Next.js" />
        <meta name="google" content="notranslate" />
        <meta
          name="keywords"
          content="UI/UX designer, UI designer, web designer, fullstack designer, UI developer, frontend developer, fullstack developer, react developer, vue developer, javascript developer, software engineer, frontend devaaja, UI devaaja, web devaaja, frontend kehittäjä, web kehittäjä, UI kehittäjä, vue kehittäjä, react kehittäjä, UI suunnittelija, fullstack suunnittelija, web suunnittelija, graafinen suunnittelija, UI/UX дизайнер, UI дизайнер, веб дизайнер, fullstack дизайнер, веб разработчик, фронтенд разработчик, frontend разработчик, web разработчик"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#f0e9db"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#18171c"
        />

        <link rel="alternate" href="https://devan.fi/ru" hrefLang="ru" />
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.webmanifest" />
        {/* Apple */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="devan.fi" />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/icons/icon-192x192.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
