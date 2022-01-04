import style from './article.module.css';
export const Link = ({ url }: { url: string }) => (
  <a className={style.link} href={url}>
    {url}
  </a>
);
