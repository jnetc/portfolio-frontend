import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Sanity CMS
import { groq } from 'next-sanity';
import { getClient } from '@Sanity/sanity.server';
// Components
import MainContext from '@MainContext';
// Dynamic components
const Portfolio = dynamic(() => import('@Portfolio/Portfolio'));
const Skills = dynamic(() => import('@Skills/Skills'));
const About = dynamic(() => import('@About/About'));
const Footer = dynamic(() => import('@Footer'));
const GoToTopButton = dynamic(() => import('@GoToTopButton'));
// Types
import { StackOverflow, LandingPageData } from '@Types';
// Helpers
import { transformLocalization } from '@Helpers/functions';
import { criticalCSS } from '@Helpers/critical';
// Context
import { Store } from '@Hooks/useContextStore';
import { Language } from '@Hooks/useContextLanguage';

const App: NextPage = ({
  main,
  locale,
  stackoverflow,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const currentLangData = transformLocalization(locale, main);

  return (
    <Store.Provider value={{ context: currentLangData, stackoverflow }}>
      <Language.Provider value={{ lang: locale }}>
        <>
          <Head>
            <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
            <meta name="googlebot" content="index, follow, noimageindex" />
            <meta name="robots" content="index, follow, noimageindex" />
            <meta name="description" content={currentLangData.meta_desc} />
            <title>{currentLangData.meta_title}</title>
          </Head>

          <main className="main grid">
            <MainContext />
            <Portfolio />
            <Skills />
            <About />
            <Footer />
            <GoToTopButton />
          </main>
        </>
      </Language.Provider>
    </Store.Provider>
  );
};

export default App;

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  locale,
}) => {
  // Альтернативный вариант
  // navigation {${locale}}
  const queryMain = groq`*[_type in ['main', "projects", "skills", "education"]] `;

  const main = await getClient(preview).fetch<Array<LandingPageData>>(
    queryMain
  );

  // get data from stackoverflow
  const responseStackOverflow = await fetch(
    'https://api.stackexchange.com/2.3/users/15545116/posts?order=desc&sort=activity&site=stackoverflow&filter=!0Rylmhd1awe02cfA2k-D_oKq4'
  );
  const resultStackOverflow = await responseStackOverflow.json();

  const stackoverflow: StackOverflow<string> = {
    reputation: `${(
      resultStackOverflow.items[0].owner.reputation / 1000
    ).toFixed(1)}k`,
    link: resultStackOverflow.items[0].owner.link,
    answers:
      resultStackOverflow.total < 1000
        ? `${resultStackOverflow.total}`
        : `${(resultStackOverflow.total / 1000).toFixed(1)}k`,
  };

  return {
    props: {
      main,
      locale,
      stackoverflow,
    },
  };
};
