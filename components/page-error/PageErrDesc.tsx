import { FC } from 'react';
import style from './page-err.module.css';

export const PageErrDesc: FC = ({ children }) => (
  <p className={style.desc}>{children}</p>
);
