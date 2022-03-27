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
