import Head from 'next/head';
import { NextPage } from 'next';

// Components
import { ErrorPage } from '@PageError/PageError';
import { ErrorImg404 } from '@PageError/ErrorImg404';
import { PageErrTitle } from '@PageError/PageErrTitle';
import { PageErrDesc } from '@PageError/PageErrDesc';
import { PageErrSubTxt } from '@PageError/PageErrSubTxt';
import { PageErrButton } from '@PageError/PageErrButton';

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="page not found" />
        <title>page not found</title>
        {/* <style
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
        /> */}
      </Head>
      <ErrorPage>
        <ErrorImg404 />
        <PageErrTitle>Oops, page not found.</PageErrTitle>
        <PageErrDesc>
          You cannot reach the page at the moment, this page has been abducted.
        </PageErrDesc>
        <PageErrSubTxt>Click the button below to return home.</PageErrSubTxt>
        <PageErrButton>back home</PageErrButton>
      </ErrorPage>
    </>
  );
};

export default Custom404;
