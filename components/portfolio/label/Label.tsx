import { FC } from 'react';

export const Label: FC<{ label: string }> = ({ label }) => (
  <span className="project__label">{label}</span>
);
