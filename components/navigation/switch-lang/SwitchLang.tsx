import { useRef } from 'react';
import { useRouter } from 'next/router';
import { LangButton } from './LangButton';

export const SwitchLang = ({ path = '' }: { path?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { locale } = useRouter();

  setTimeout(() => {
    if (!ref.current) return;
    ref.current.classList.add('lang-duration');
  }, 300);

  return (
    <div className={langSwitchClass(locale)} aria-label="The language switcher">
      <LangButton path={path} lang="en" />
      <LangButton path={path} lang="fi" />
      <LangButton path={path} lang="ru" />
      {/* <div className="switch" ref={ref}></div> */}
    </div>
  );
};

const langSwitchClass = (lang?: string) => `lang-switcher ${lang}`;
