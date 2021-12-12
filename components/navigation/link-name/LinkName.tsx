import { FC } from 'react';
import Link from 'next/link';
// Context
import { useStore } from '@Store';
// Type
import { LinkNameType } from '@Types';

export const LinkName: FC<LinkNameType> = ({ link, handler }) => {
  const { lang } = useStore();
  const closeMenu = () => handler(false);

  return (
    <Link href={`#${link.anchor}`}>
      <a className="nav-link" onClick={closeMenu}>
        {link[lang]}
      </a>
    </Link>
  );
};
