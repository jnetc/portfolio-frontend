import { FC } from 'react';

export const Tag: FC<{ name: string }> = ({ name }) => {
  return <li className="tag-name">{name}</li>;
};
