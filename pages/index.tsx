import type { StackOverflow, LandingPageData } from '@Types';
import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
// Sanity CMS
import { groq } from 'next-sanity';
import { client } from '@Sanity/sanity.client';
// Components
import MainContext from '@MainContext';
// Dynamic components
const Portfolio = dynamic(() => import('@Portfolio/Portfolio'), { ssr: false });
const Skills = dynamic(() => import('@Skills/Skills'), { ssr: false });
const About = dynamic(() => import('@About/About'), { ssr: false });
const Footer = dynamic(() => import('@Footer'), { ssr: false });
const GoToTopButton = dynamic(() => import('@GoToTopButton'), { ssr: false });
// Helpers
import { transformLocalization } from '@Helpers/functions';
import { criticalCSS } from '@Helpers/critical';
// Hooks
import { Store } from '@Hooks/useContextStore';
import { Language } from '@Hooks/useContextLanguage';

const App: NextPage = ({ main, locale, profile, stackoverflow }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const currentLangData = transformLocalization(locale, main);
  // Add profile links from resume
  currentLangData.github_href = profile.github_href;
  currentLangData.linkedin_href = profile.linkedin_href;

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
            {/* Facebook / Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="devan" />
            <meta property="og:url" content={`${locale === 'fi' ? 'https://devan.fi/' : `https://devan.fi/${locale}/`}`} />
            <meta property="og:image" content="/icons/favicon.svg" />
            <meta property="og:title" content={currentLangData.meta_title} />
            <meta property="og:description" content={currentLangData.meta_desc} />
            <meta property="og:locale" content={locale} />
            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content={`${locale === 'fi' ? 'https://devan.fi/' : `https://devan.fi/${locale}/`}`} />
            <meta name="twitter:title" content={currentLangData.meta_title} />
            <meta name="twitter:description" content={currentLangData.meta_desc} />
            <meta name="twitter:image" content="/icons/favicon.svg" />
          </Head>

          <main className="main grid">
            <MainContext />
            <Portfolio />
            <Skills />
            <About />
            <Footer />
          </main>
          <GoToTopButton />
        </>
      </Language.Provider>
    </Store.Provider>
  );
};

export default App;

export const getStaticProps: GetStaticProps = async ({ preview = false, locale }) => {
  if (preview) return { props: { preview } };

  const queryMain = groq`*[_type in ['main', "projects", "skills", "education"]] `;
  const main = await client.fetch<Array<LandingPageData>>(queryMain);

  const queryProfile = groq`*[_type in ["resume_profile"]] {github_href, linkedin_href}`;
  const [profile] = await client.fetch<Array<LandingPageData>>(queryProfile);

  // get data from stackoverflow
  const responseStackOverflow = await fetch(
    'https://api.stackexchange.com/2.3/users/15545116/posts?order=desc&sort=activity&site=stackoverflow&filter=!0Rylmhd1awe02cfA2k-D_oKq4'
  );
  const resultStackOverflow = await responseStackOverflow.json();

  const stackoverflow: StackOverflow<string> = {
    reputation: `${(resultStackOverflow.items[0].owner.reputation / 1000).toFixed(1)}k`,
    link: resultStackOverflow.items[0].owner.link,
    answers: resultStackOverflow.total < 1000 ? `${resultStackOverflow.total}` : `${(resultStackOverflow.total / 1000).toFixed(1)}k`,
  };

  return {
    props: {
      main,
      locale,
      profile,
      stackoverflow,
    },
  };
};
