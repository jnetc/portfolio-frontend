import { FC } from 'react';
import style from './page-err.module.css';

export const PageErrSubTxt: FC = ({ children }) => (
  <p className={style.sub_txt}>{children}</p>
);
