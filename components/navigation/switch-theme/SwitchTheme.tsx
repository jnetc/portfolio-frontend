import { useEffect, useState, useRef, useCallback } from 'react';
import { ThemeIcon } from './ThemeIcon';
import { useContextMain } from '@Hooks/useContextMain';

const DARK_SCHEME = 'dark';
const LIGHT_SCHEME = 'light';
type ThemeType = typeof DARK_SCHEME | typeof LIGHT_SCHEME;

//!
// Also should add additional lines of code to the _document.tsx.
//!

export const SwitchTheme = () => {
  const { switchTheme } = useContextMain();
  const [theme, setTheme] = useState<string | null>(DARK_SCHEME);
  let ref = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    setTheme(prevState => {
      switch (prevState) {
        case DARK_SCHEME:
          return LIGHT_SCHEME;
        case LIGHT_SCHEME:
          return DARK_SCHEME;
        default:
          return DARK_SCHEME;
      }
    });
  };

  const themeSwitcher = useCallback((value: ThemeType) => {
    document.documentElement.dataset.theme = value;
    localStorage.setItem('theme', value);
  }, []);

  // Define value from localStorage or system color
  useEffect(() => {
    const lS = localStorage.getItem('theme');
    if (!lS) {
      setTheme(DARK_SCHEME);
      // window.matchMedia(`(prefers-color-scheme: ${DARK_SCHEME})`).matches
      // Prevent transition when page is loaded
      setTimeout(() => {
        ref.current?.classList.add('theme-duration');
      }, 800);
      return;
    }
    setTheme(lS);

    const preventTransition = setTimeout(() => {
      ref.current?.classList.add('theme-duration');
    }, 800);

    return () => {
      clearTimeout(preventTransition);
      setTheme(null);
    };
  }, []);

  // Switch theme
  useEffect(() => {
    if (theme === DARK_SCHEME) {
      themeSwitcher(DARK_SCHEME);
      switchTheme(DARK_SCHEME);
      return;
    }
    themeSwitcher(LIGHT_SCHEME);
    switchTheme(LIGHT_SCHEME);
  }, [theme, themeSwitcher, switchTheme]);

  return (
    <>
      <div
        className="theme-switcher"
        tabIndex={0}
        role="button"
        aria-label={theme ? `change to ${LIGHT_SCHEME} mode` : `change to ${DARK_SCHEME} mode`}
        onClick={toggleTheme}
        onKeyPress={toggleTheme}
        ref={ref}
      >
        <ThemeIcon />
      </div>
    </>
  );
};
