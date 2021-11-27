import { FC } from 'react';
// Components
import { Tag } from '../tag/Tag';

export const Tags: FC<{ tags: Array<string> }> = ({ tags }) => (
  <ul className="project__tags">
    {tags.map((tag, idx) => {
      return <Tag key={tag + idx} name={tag} />;
    })}
  </ul>
);
