import { FC } from 'react';

export const Title: FC<{ title: string }> = ({ title }) => (
  <h1 className="project__name">{title}</h1>
);
