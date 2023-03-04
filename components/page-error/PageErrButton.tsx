import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import style from './page-err.module.css';

export const PageErrButton: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const moveTo = () => router.push('/');

  return (
    <button type="button" onClick={moveTo} className={`${style.button} btn`}>
      {children}
    </button>
  );
};
