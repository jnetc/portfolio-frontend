// Components
import { Tag } from '@Portfolio/tags/Tag';
// Style
import style from '../portfolio.module.css';

export const Tags = ({ tags }: { tags: Array<string> }) => (
  <ul className={style.tags}>
    {tags.map((tag, idx) => {
      return <Tag key={tag + idx} name={tag} />;
    })}
  </ul>
);
