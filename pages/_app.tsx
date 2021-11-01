import '../styles/globals.css';
// import '../styles/globals.css';
// import '../styles/globals.css';

import Head from 'next/head';

import type { AppProps } from 'next/app';
import { Store } from '@Hooks/useStore';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <Head>
        {/* <style
          id="holderStyle"
          dangerouslySetInnerHTML={{
            __html: `
            @media (prefers-color-scheme: dark) {
              html[data-theme='dark'] {
                --bg-clr: hsl(252, 10%, 10%);
                --primary-clr: hsl(39, 43%, 90%);
                --secondary-clr: hsl(162, 47%, 66%);
                --card-clr: hsl(240, 3%, 12%);
                --card-shadow-clr: hsl(0, 0%, 0%);
                --card-extra-clr: hsl(220, 6%, 19%);
              }
            }
            @media (prefers-color-scheme: light) {
              html[data-theme='light'] {
                --bg-clr: hsl(39, 43%, 90%);
                --primary-clr: hsl(252, 10%, 10%);
                --secondary-clr: hsl(341, 53%, 33%);
                --card-clr: hsl(39, 42%, 87%);
                --card-shadow-clr: hsl(38, 12%, 70%);
                --card-extra-clr: hsl(38, 12%, 70%);
              }
            }

            html[data-theme='light'] {
              --bg-clr: hsl(39, 43%, 90%);
              --primary-clr: hsl(252, 10%, 10%);
              --secondary-clr: hsl(341, 53%, 33%);
              --card-clr: hsl(39, 42%, 87%);
              --card-shadow-clr: hsl(38, 12%, 70%);
              --card-extra-clr: hsl(38, 12%, 70%);
            }
            html[data-theme='dark'] {
              --bg-clr: hsl(252, 10%, 10%);
              --primary-clr: hsl(39, 43%, 90%);
              --secondary-clr: hsl(162, 47%, 66%);
              --card-clr: hsl(240, 3%, 12%);
              --card-shadow-clr: hsl(0, 0%, 0%);
              --card-extra-clr: hsl(220, 6%, 19%);
            }

            body {
              background-color: var(--bg-clr);
              color: var(--primary-clr);
            }
         `,
          }}
        /> */}
      </Head>
      <Component {...pageProps} />
    </Store>
  );
}

export default MyApp;
