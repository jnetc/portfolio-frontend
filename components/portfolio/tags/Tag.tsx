// Style
import style from '../portfolio.module.css';

export const Tag = ({ name }: { name: string }) => {
  return <li className={style.tag_name}>{name}</li>;
};
