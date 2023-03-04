import { FC, ReactNode } from 'react';
import style from './page-err.module.css';

export const ErrorPage: FC<{ children: ReactNode }> = ({ children }) => <section className={style.module}>{children}</section>;
