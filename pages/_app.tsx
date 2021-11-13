import '@Styles/globals.css';
import '@Styles/navigation.css';
import '@Styles/home.css';
import '@Styles/portfolio.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
