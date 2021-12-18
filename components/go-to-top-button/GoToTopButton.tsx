import { FC, useEffect, useRef } from 'react';
import Link from 'next/link';
// Style
import style from './go-to-top.module.css';

const GoToTop: FC = () => {
  const refToTop = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const position = window.scrollY;
      const fromTop = window.innerHeight / 5;

      if (position < fromTop) {
        refToTop.current?.classList.remove(`${style.view}`);
        return;
      }
      refToTop.current?.classList.add(`${style.view}`);
    });

    return () => {
      document.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <Link href="#home">
      <a
        className={`${style.module} grid-12`}
        ref={refToTop}
        role="button"
        tabIndex={0}
        aria-label="go to top button"
        title="go to top button"
      ></a>
    </Link>
  );
};

export default GoToTop;
