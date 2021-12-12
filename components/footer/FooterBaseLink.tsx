import { FC } from 'react';
// Type
import { FooterLink } from '@Types';

export const FooterBaseLink: FC<FooterLink> = ({ link, name }) => (
  <a
    className="footer__desc-link"
    href={link}
    target="_blank"
    rel="noreferrer"
    aria-label={`link to ${name}`}
    title={`${name}`}
  >
    {name}
  </a>
);
