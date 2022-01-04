import style from './article.module.css';
import { Tag } from './Tag';

export const Tags = ({ tags }: { tags: Array<string> }) => (
  <ul className={style.tags}>
    {tags.map(t => (
      <Tag key={t} tag={t} />
    ))}
  </ul>
);
