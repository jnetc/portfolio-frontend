import { useContext, createContext, useState } from 'react';
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

// Sanity CMS
import { groq } from 'next-sanity';
import { getClient } from '@Sanity/sanity.server';
// Components
import Navigation from '@Navigation/index';
import Home from '@Home/index';
import Portfolio from '@Portfolio/index';
import Skills from '@Skills/index';
import About from '@About/index';
// Types
import { Store, StackOverflow, SanityData } from '@Types';
// Helpers
import { transformLocalization } from '@Helpers/functions';

// Create context
const state: Store = {
  context: null,
  lang: '',
  theme: 'dark',
  switchTheme: theme => theme,
  stackoverflow: null,
};

const Store = createContext(state);

export const useStore = () => {
  return useContext(Store);
};
//

const App: NextPage<{
  main: Array<SanityData>;
  locale: string;
  stackoverflow: StackOverflow<string>;
}> = ({ main, locale, stackoverflow }) => {
  const currentLangData = transformLocalization(locale, main);
  const [theme, switchTheme] = useState(state.theme);

  return (
    <Store.Provider
      value={{
        context: currentLangData,
        lang: locale,
        theme,
        switchTheme,
        stackoverflow,
      }}
    >
      <>
        <Head>
          <meta name="description" content={currentLangData?.meta_desc} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{currentLangData?.meta_title}</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <Navigation />
        <main className="main grid">
          <Home />
          <Portfolio />
          <Skills />
          <About />
        </main>
      </>
    </Store.Provider>
  );
};

// Query value

export const getStaticProps: GetStaticProps = async ({
  preview = false,
  locale,
}) => {
  // Альтернативный вариант
  // navigation {${locale}}
  const queryMain = groq`*[_type in ['main', "projects", "skills", "education"]] `;
  // const queryMain = groq`*[_type == 'main'] {
  //   meta_title,
  //   meta_desc,
  //   github_href,
  //   slogan,
  //   title
  // }`;
  // const queryProjects = groq`*[_type == 'projects'] {
  //   recent_project,
  //   recent,
  //   project_title,
  //   description,
  //   poster,
  //   stacks,
  //   page_href,
  //   github_href
  // }`;

  const main = await getClient(preview).fetch<Array<SanityData>>(queryMain);
  // const projects = await getClient(preview).fetch(queryProjects);

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

  // console.log('staticprops...', stackoverflow);
  return {
    props: {
      main,
      // projects,
      locale,
      stackoverflow,
    },
  };
  // return {
  //   props: {
  //     data: {
  //       action_btn: {
  //         en: 'Hire me',
  //         ru: 'Найди меня',
  //       },
  //       second_btn: {
  //         en: 'My works',
  //         ru: 'Мои работы',
  //       },
  //       navigation: {
  //         en: ['Home', 'Portfolio', 'Skills', 'About'],
  //         ru: ['Начальная', 'Порфолио', 'Навыки', 'Обо мне'],
  //       },
  //       slogan: {
  //         en: 'Together, we will make your product in the digital world ',
  //         ru: 'Вместе мы сделаем ваш продукт в цифровом мире ',
  //       },
  //     },
  //     locale,
  //   },
  // };
};

export default App;
