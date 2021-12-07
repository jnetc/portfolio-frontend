import { useContext, createContext, useState } from 'react';
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';

// Sanity CMS
import { groq } from 'next-sanity';
import { getClient } from '@Sanity/sanity.server';
// Components
import ModalSwitch from 'components/modal/ModalSwitch';
import Navigation from '@Navigation/index';
import Home from '@Home/index';
import Portfolio from '@Portfolio/index';
import Skills from '@Skills/index';
import About from '@About/index';
import Footer from '@Footer';
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
  modal: {
    show: false,
  },
  toggleModal: show => show,
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
  const [modal, toggleModal] = useState(state.modal);

  return (
    <Store.Provider
      value={{
        context: currentLangData,
        lang: locale,
        theme,
        switchTheme,
        stackoverflow,
        modal,
        toggleModal,
      }}
    >
      <>
        <Head>
          <meta name="description" content={currentLangData?.meta_desc} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{currentLangData?.meta_title}</title>
          {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>

        <ModalSwitch />
        <Navigation />
        <main className="main grid">
          <Home />
          <Portfolio />
          <Skills />
          <About />
          <Footer />
        </main>
      </>
    </Store.Provider>
  );
};

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

  return {
    props: {
      main,
      locale,
      stackoverflow,
    },
  };
};

export default App;
