import { FC, ReactNode } from 'react';
import style from './page-err.module.css';

export const PageErrDesc: FC<{ children: ReactNode }> = ({ children }) => <p className={style.desc}>{children}</p>;
