import { FC } from 'react';
import style from './page-err.module.css';

export const PageErrTitle: FC = ({ children }) => (
  <h1 className={style.title}>{children}</h1>
);
