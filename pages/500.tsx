import Head from 'next/head';
import { NextPage } from 'next';
const Custom500: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Server-side error occurred" />
        <title>Server-side error occurred</title>
        <style
          id="___critical-css"
          dangerouslySetInnerHTML={{
            __html: `
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
                html {
                  background-color: var(--bg-clr);
                  color: var(--primary-clr);
                  transition: all .5s ease;
                }
              `,
          }}
        />
      </Head>
      <h1>500 - Server-side error occurred</h1>
    </>
  );
};

export default Custom500;
