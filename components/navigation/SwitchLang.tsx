import { FC } from 'react';
import Link from 'next/link';

import { useStore } from '@Store';

export const SwitchLang: FC = () => {
  const { lang } = useStore();

  console.log(lang);

  return (
    <div className="switch-language">
      <Link href="/" locale="en">
        <a className={lang === 'en' ? 'active' : undefined}>EN</a>
      </Link>
      <Link href="/ru" locale="ru">
        <a className={lang === 'ru' ? 'active' : undefined}>RU</a>
      </Link>
    </div>
  );
};
