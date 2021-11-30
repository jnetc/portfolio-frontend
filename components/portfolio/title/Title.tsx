import { FC } from 'react';

export const Title: FC<{ title: string }> = ({ title }) => (
  <h1 className="card-title project__name">{title}</h1>
);
