import { FC, useEffect, useState, useRef, useCallback } from 'react';

const DARK_SCHEME = 'dark';
const LIGHT_SCHEME = 'light';

export const SwitchTheme: FC = () => {
  const [theme, setTheme] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const toggleTheme = () => {
    setTheme(prevState => {
      const newValue = !prevState;
      return newValue;
    });
  };

  const themeSwitcher = useCallback(value => {
    document.body.dataset.theme = value;
    ref.current?.setAttribute('aria-label', `change to ${value} mode`);
    localStorage.setItem('theme', value);
  }, []);

  useEffect(() => {
    const lS = localStorage.getItem('theme');
    setTheme(lS === DARK_SCHEME);
  }, []);

  // Switch theme
  useEffect(() => {
    if (theme) {
      themeSwitcher(DARK_SCHEME);
      return;
    }
    themeSwitcher(LIGHT_SCHEME);
  }, [theme, themeSwitcher]);

  return (
    <>
      <button tabIndex={0} onClick={toggleTheme} ref={ref}>
        {theme ? DARK_SCHEME : LIGHT_SCHEME}
      </button>
    </>
  );
};

//! PS
// const COLOR_SCHEMES = ['no-preference', 'dark', 'light'];

// First check user system color theme
// useEffect(() => {
//   const lS = localStorage.getItem('theme');
//   if (!lS) {
//     // Проверка цветовой схемы системы
//     for (const scheme of COLOR_SCHEMES) {
//       if (window.matchMedia(`(prefers-color-scheme: ${scheme})`).matches) {
//         document.body.dataset.theme = scheme;
//         const mode = scheme === DARK_SCHEME;
//         setTheme(mode);
//         accessibilityAttr(scheme, mode);
//       }
//     }
//   }
//   if (lS) {
//     setTheme(lS === DARK_SCHEME);
//   }
//   console.log('switchTheme');
// }, []);
