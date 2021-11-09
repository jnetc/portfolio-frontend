import { FC } from 'react';
import Link from 'next/link';

interface NavLink {
  anchor: string;
  en: string;
  ru: string;
}

export const LinkName: FC<{
  link: NavLink;
  lang: string;
  activeLink: string;
}> = ({ link, lang, activeLink }) => {
  return (
    <Link href={link.anchor}>
      <a
        className={activeLink === link.anchor ? 'nav-link active' : 'nav-link'}
      >
        {lang === 'en' ? `${link.en}` : `${link.ru}`}
      </a>
    </Link>
  );
};
