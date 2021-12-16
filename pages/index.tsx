import { useEffect, useRef } from 'react';
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

// Sanity CMS
import { groq } from 'next-sanity';
import { getClient } from '@Sanity/sanity.server';
// Components
import MainContext from '@Main';
import Portfolio from '@Portfolio/Portfolio';
import Skills from '@Skills/Skills';
import About from '@About/About';
import Footer from '@Footer';
// Types
import { StackOverflow, SanityData } from '@Types';
// Helpers
import { transformLocalization } from '@Helpers/functions';
// Hook
import { Store } from '@Hooks/useContextStore';

const App: NextPage<{
  main: Array<SanityData>;
  locale: 'en' | 'ru';
  stackoverflow: StackOverflow<string>;
}> = ({ main, locale, stackoverflow }) => {
  const currentLangData = transformLocalization(locale, main);
  const refToTop = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const position = window.scrollY;
      const fromTop = window.innerHeight / 5;

      if (position < fromTop) {
        refToTop.current?.classList.remove('view');
        return;
      }
      refToTop.current?.classList.add('view');
    });

    return () => {
      document.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <Store.Provider
      value={{
        context: currentLangData,
        lang: locale,
        stackoverflow,
      }}
    >
      <>
        <Head>
          <meta name="description" content={currentLangData?.meta_desc} />
          <title>{currentLangData?.meta_title}</title>
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

        <main className="main grid">
          <MainContext />
          <Portfolio />
          <Skills />
          <About />
          <Footer />
        </main>

        <Link href="#home">
          <a
            className="to-top"
            ref={refToTop}
            role="button"
            tabIndex={0}
            aria-label="go to top"
            title="go to top"
          ></a>
        </Link>
      </>
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
  const queryMain = groq`*[_type in ['main', "projects", "skills", "education", "modal"]] `;

  const main = await getClient(preview).fetch<Array<SanityData>>(queryMain);

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

  // type mainType = typeof main
  // type stackoverflowType = typeof stackoverflow

  return {
    props: {
      main,
      locale,
      stackoverflow,
    },
  };
};
