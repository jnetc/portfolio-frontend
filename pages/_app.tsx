import '../styles/globals.css';
// import '../styles/globals.css';
// import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { Store } from '@Hooks/useStore';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  );
}

export default MyApp;
