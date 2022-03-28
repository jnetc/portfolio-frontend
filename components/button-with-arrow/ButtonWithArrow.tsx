import Link from 'next/link';
// Context
import { useContextLanguage } from '@Hooks/useContextLanguage';
// Type
import { ButtonWithArrawType } from '@Types';
// Localization
import { ButtonWithArrowName } from '@Helpers/localization';
// Style
import style from './button-with-arrow.module.css';

const ButtonWithArraw = ({
  cssClass = '',
  route = '',
  name,
  accessibility,
}: ButtonWithArrawType) => {
  const { lang } = useContextLanguage();

  return (
    <div
      className={`${style.module} ${cssClass}`}
      title={accessibility}
      aria-label={accessibility}
    >
      <Link href={lang === 'en' ? `/${route}` : `/${lang}/${route}`}>
        <a className={style.button}>{ButtonWithArrowName[name][lang]}</a>
      </Link>
      <span className={style.arrow} />
    </div>
  );
};

export default ButtonWithArraw;
