import { FC } from 'react';
// Type
import { FooterLink } from '@Types';
// Style
import style from './footer.module.css';

export const FooterBaseLink: FC<FooterLink> = ({ link, name }) => (
  <a
    className={style.desc_link}
    href={link}
    target="_blank"
    rel="noreferrer"
    aria-label={`link to ${name}`}
    title={`${name}`}
  >
    {name}
  </a>
);
