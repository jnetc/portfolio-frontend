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
import { createSchema } from '@Helpers/seo-schema';
// Hooks
import { Store } from '@Hooks/useContextStore';
import { Language } from '@Hooks/useContextLanguage';

const App: NextPage = ({ main, locale, profile, stackoverflow }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const currentLangData = transformLocalization(locale, main);
  // Add profile links from resume
  currentLangData.github_href = profile.github_href;
  currentLangData.linkedin_href = profile.linkedin_href;
  const { projects, skills, education, ...herosection } = currentLangData;

  // Create reach results (schema.org) for google search
  const schema = createSchema(herosection);

  return (
    <Store.Provider value={{ context: currentLangData, stackoverflow }}>
      <Language.Provider value={{ lang: locale }}>
        <>
          <Head>
            <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
            <title>{currentLangData.meta_title}</title>
            <meta name="description" content={currentLangData.meta_desc} />
            <meta name="googlebot" content="index, follow" />
            <meta name="robots" content="index, follow" />

            {/* Canonical page */}
            <link
              rel="canonical"
              href={`${locale === 'fi' ? 'https://www.devan.fi' : `https://www.devan.fi/${locale}`}`}
            />

            {/* Facebook / Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="devan" />
            <meta
              property="og:url"
              content={`${locale === 'fi' ? 'https://www.devan.fi' : `https://www.devan.fi/${locale}`}`}
            />
            <meta property="og:image" content="/favicon.svg" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:title" content={currentLangData.meta_title} />
            <meta property="og:image:width" content="256" />
            <meta property="og:image:height" content="256" />
            <meta property="og:image:alt" content="Logo devan.fi" />
            <meta property="og:description" content={currentLangData.meta_desc} />
            <meta property="og:locale" content="fi" />
            <meta property="og:locale:alternate" content="ru" />
            <meta property="og:locale:alternate" content="en" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary" />
            <meta
              name="twitter:url"
              content={`${locale === 'fi' ? 'https://www.devan.fi' : `https://www.devan.fi/${locale}`}`}
            />
            <meta name="twitter:title" content={currentLangData.meta_title} />
            <meta name="twitter:description" content={currentLangData.meta_desc} />
            <meta name="twitter:image" content="/favicon.svg" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
    answers:
      resultStackOverflow.total < 1000
        ? `${resultStackOverflow.total}`
        : `${(resultStackOverflow.total / 1000).toFixed(1)}k`,
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
