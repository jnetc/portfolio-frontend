import { FC, useRef } from 'react';
import Link from 'next/link';

import { useStore } from '@Store';

export const SwitchLang: FC = () => {
  const { lang } = useStore();
  const ref = useRef<HTMLDivElement>(null);

  setTimeout(() => {
    if (!ref.current) return;
    ref.current.classList.add('wait-animation');
    ref.current.classList.remove('static');
  }, 300);

  return (
    <div
      className={lang === 'en' ? 'lang-switcher en' : 'lang-switcher ru'}
      aria-label={
        lang === 'en'
          ? 'The English version of the site is selected'
          : 'The Russian version of the site is selected'
      }
    >
      <Link href="/" locale="en">
        <a className={lang === 'en' ? 'active' : undefined}>EN</a>
      </Link>
      <Link href="/ru" locale="ru">
        <a className={lang === 'ru' ? 'active' : undefined}>RU</a>
      </Link>
      <div className="switch static" ref={ref}></div>
    </div>
  );
};
