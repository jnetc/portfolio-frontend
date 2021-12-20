import { FC } from 'react';
import style from './page-err.module.css';

export const ErrorPage: FC = ({ children }) => (
  <section className={style.module}>{children}</section>
);
