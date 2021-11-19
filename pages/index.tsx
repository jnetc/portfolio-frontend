import { useContext, createContext, useState } from 'react';
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

// Sanity CMS
import { groq } from 'next-sanity';
// import { PortableText } from '../lib/sanity';
import { getClient } from '../lib/sanity.server';

// Components
import Navigation from '@Navigation';
import Home from '@Home';
import Portfolio from '@Portfolio';
// Types
import { Data, Store, StackOverflow } from '@Types';
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
  data: Data;
  locale: string;
  stackoverflow: StackOverflow<number>;
}> = ({ data, locale, stackoverflow }) => {
  const currentLangData = transformLocalization(locale, data);
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
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <title>Create Next App </title>
        </Head>

        <Navigation />
        <main>
          <Home />
          <Portfolio />
        </main>
        {/* <main>
          <h1>Welcome to 😃</h1>
          <button>😍</button>

          <PortableText blocks={currentLangData.slogan} />
        </main> */}
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
  const query = groq`*[_type == 'main'] {
    navigation,
    slogan,
    action_btn,
    second_btn

  }`;

  const [data] = await getClient(preview).fetch(query);

  // get data from stackoverflow
  const responseStackOverflow = await fetch(
    'https://api.stackexchange.com/2.3/users/15545116?order=desc&sort=reputation&site=stackoverflow'
  );
  const resultStackOverflow = await responseStackOverflow.json();

  const stackoverflow: StackOverflow<number> = {
    reputation: resultStackOverflow.items[0].reputation,
    link: resultStackOverflow.items[0].link,
    name: resultStackOverflow.items[0].display_name,
    image: resultStackOverflow.items[0].profile_image,
  };

  console.log('staticprops...', stackoverflow);
  return {
    props: {
      data,
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
