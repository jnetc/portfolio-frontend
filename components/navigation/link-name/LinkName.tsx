import Link from 'next/link';
// Context
import { useContextLanguage } from '@Hooks/useContextLanguage';
// Type
import { LinkNameType } from '@Types';

export const LinkName = ({ link, handler }: LinkNameType) => {
  const { lang } = useContextLanguage();
  const closeMenu = () => handler(false);

  return (
    <Link href={`#${link.anchor}`}>
      <a className="nav-link" onClick={closeMenu}>
        {link[lang]}
      </a>
    </Link>
  );
};
