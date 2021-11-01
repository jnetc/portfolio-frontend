import { FC, useContext, createContext, useState, useEffect } from 'react';

interface State {
  lang: string;
  setLang: (lang: string) => void;
}

const state: State = {
  lang: 'en',
  setLang: lang => lang,
};
const Content = createContext(state);

export const useStore = () => {
  return useContext(Content);
};

// const COLOR_SCHEMES = ['no-preference', 'dark', 'light'];
// const DARK_SCHEME = 'dark';
// const LIGHT_SCHEME = 'light';

export const Store: FC = ({ children }) => {
  const [lang, setLang] = useState(state.lang);
  useEffect(() => {
    const docLang = document.documentElement.lang;
    // const
    // if (lang !== docLang) {
    // }
    // console.log('update lang', docLang);

    setLang(docLang);
    // console.log(document.documentElement.lang);
    // console.log(navigator.language);
  }, []);
  // console.log('store___');

  // First check user system color theme
  // useEffect(() => {
  //   const lS = localStorage.getItem('theme');
  //   // if (lS) return;
  //   if (!lS) {
  //     // Проверка цветовой схемы системы
  //     for (const scheme of COLOR_SCHEMES) {
  //       if (window.matchMedia(`(prefers-color-scheme: ${scheme})`).matches) {
  //         // const mode = scheme === DARK_SCHEME;
  //         document.documentElement.dataset.theme = scheme;
  //         console.log('update theme', scheme);

  //         setTheme(scheme);
  //         localStorage.setItem('theme', scheme);
  //       }
  //     }
  //   }

  //   if (lS) {
  //     setTheme(lS);
  //   }
  // }, []);

  return (
    <Content.Provider
      value={{
        lang,
        setLang,
      }}
    >
      {children}
    </Content.Provider>
  );
};
