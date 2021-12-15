import { FC, useRef } from 'react';
import Link from 'next/link';

import { useContextStore } from '@Hooks/useContextStore';

export const SwitchLang: FC = () => {
  const { lang } = useContextStore();
  const ref = useRef<HTMLDivElement>(null);

  setTimeout(() => {
    if (!ref.current) return;
    ref.current.classList.add('lang-duration');
  }, 300);

  return (
    <div
      className={lang === 'en' ? 'lang-switcher en' : 'lang-switcher ru'}
      title={
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
      <div className="switch" ref={ref}></div>
    </div>
  );
};
