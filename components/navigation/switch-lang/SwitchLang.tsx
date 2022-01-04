import { useRef } from 'react';
import { useRouter } from 'next/router';
import { LangButton } from './LangButton';

export const SwitchLang = ({
  path = '',
  posCss = '',
}: {
  path?: string;
  posCss?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { locale } = useRouter();

  setTimeout(() => {
    if (!ref.current) return;
    ref.current.classList.add('lang-duration');
  }, 300);

  return (
    <div
      className={
        locale === 'en'
          ? `${posCss} lang-switcher en`
          : `${posCss} lang-switcher ru`
      }
      title={
        locale === 'en'
          ? 'The English version of the site is selected'
          : 'The Russian version of the site is selected'
      }
    >
      <LangButton path={path} lang="en" />
      <LangButton path={path} lang="ru" />
      <div className="switch" ref={ref}></div>
    </div>
  );
};
