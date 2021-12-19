import Link from 'next/link';
// Context
import { useContextStore } from '@Hooks/useContextStore';
// Type
import { LinkNameType } from '@Types';

export const LinkName = ({ link, handler }: LinkNameType) => {
  const { lang } = useContextStore();
  const closeMenu = () => handler(false);

  return (
    <Link href={`#${link.anchor}`}>
      <a className="nav-link" onClick={closeMenu}>
        {link[lang]}
      </a>
    </Link>
  );
};
