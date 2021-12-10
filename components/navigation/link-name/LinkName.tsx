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
  handler: () => void;
}> = ({ link, lang, handler }) => {
  return (
    <Link href={link.anchor}>
      <a className="nav-link" onClick={() => handler()}>
        {lang === 'en' ? `${link.en}` : `${link.ru}`}
      </a>
    </Link>
  );
};
