import { FC, useEffect, useState, useRef, useCallback } from 'react';

const DARK_SCHEME = 'dark';
const LIGHT_SCHEME = 'light';
//!
// Also should add additional lines of code to the _document.tsx.
//!

export const SwitchTheme: FC = () => {
  const [theme, setTheme] = useState<Boolean | null>(null);
  const ref = useRef<HTMLButtonElement>(null);

  const toggleTheme = () => {
    setTheme(prevState => {
      const newValue = !prevState;
      return newValue;
    });
  };

  const themeSwitcher = useCallback(value => {
    document.documentElement.dataset.theme = value;
    ref.current?.setAttribute('aria-label', `change to ${value} mode`);
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

    return () => setTheme(null);
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
