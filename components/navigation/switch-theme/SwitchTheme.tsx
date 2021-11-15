import { FC, useEffect, useState, useRef, useCallback } from 'react';
import { ThemeIcon } from './ThemeIcon';
import { useStore } from '@Store';

const DARK_SCHEME = 'dark';
const LIGHT_SCHEME = 'light';
//!
// Also should add additional lines of code to the _document.tsx.
//!

export const SwitchTheme: FC = () => {
  const { switchTheme } = useStore();
  const [theme, setTheme] = useState<boolean | null>(null);
  let ref = useRef<HTMLDivElement>(null);

  const toggleTheme = () => {
    setTheme(prevState => {
      const newValue = !prevState;
      return newValue;
    });
  };

  const themeSwitcher = useCallback(value => {
    document.documentElement.dataset.theme = value;
    localStorage.setItem('theme', value);
  }, []);

  // Define value from localStorage or system color
  useEffect(() => {
    const lS = localStorage.getItem('theme');
    if (!lS) {
      setTheme(
        window.matchMedia(`(prefers-color-scheme: ${DARK_SCHEME})`).matches
      );
      return;
    }
    setTheme(lS === DARK_SCHEME);

    // Prevent transition when page is loaded
    const preventTransition = setTimeout(() => {
      ref.current?.classList.remove('prevent-theme');
    }, 0);

    return () => {
      clearTimeout(preventTransition);
      setTheme(null);
    };
  }, []);

  // Switch theme
  useEffect(() => {
    if (theme) {
      themeSwitcher(DARK_SCHEME);
      switchTheme(DARK_SCHEME);
      return;
    }
    themeSwitcher(LIGHT_SCHEME);
    switchTheme(LIGHT_SCHEME);
  }, [theme, themeSwitcher, switchTheme]);

  console.log('up parent');

  return (
    <>
      <div
        className="theme-switcher prevent-theme"
        tabIndex={0}
        role="button"
        aria-label={
          theme
            ? `change to ${LIGHT_SCHEME} mode`
            : `change to ${DARK_SCHEME} mode`
        }
        onClick={toggleTheme}
        onKeyPress={toggleTheme}
        ref={ref}
      >
        <ThemeIcon theme={theme} />
      </div>
    </>
  );
};
