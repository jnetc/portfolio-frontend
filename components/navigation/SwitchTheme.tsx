import { FC, useEffect, useState, useRef, useCallback } from 'react';

const COLOR_SCHEMES = ['no-preference', 'dark', 'light'];
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

  // Set attributes to the button for screen reader & save to the localStorage
  const accessibilityAttr = (value: string, checked: boolean) => {
    ref.current?.setAttribute('aria-label', `Change to ${value} mode`);
    ref.current?.setAttribute('aria-cheked', `${checked}`);
    localStorage.setItem('theme', value);
  };

  const themeSwitcher = useCallback(
    value => {
      const html = document.documentElement;
      html.dataset.theme = value;
      accessibilityAttr(value, theme);
    },
    [theme]
  );

  // First check user system color theme
  useEffect(() => {
    const lS = localStorage.getItem('theme');
    if (!lS) {
      // Проверка цветовой схемы системы
      for (const scheme of COLOR_SCHEMES) {
        if (window.matchMedia(`(prefers-color-scheme: ${scheme})`).matches) {
          const mode = scheme === DARK_SCHEME;
          setTheme(mode);
          accessibilityAttr(scheme, mode);
        }
      }
    }
    if (lS) {
      setTheme(lS === DARK_SCHEME);
    }
    console.log('switchTheme');
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
      <button onClick={toggleTheme} ref={ref}>
        {theme ? DARK_SCHEME : LIGHT_SCHEME}
      </button>
    </>
  );
};
