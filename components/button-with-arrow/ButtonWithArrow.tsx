import Link from 'next/link';
// Context
import { useContextLanguage } from '@Hooks/useContextLanguage';
// Type
import { ButtonWithArrawType } from '@Types';
// Localization
import { ButtonWithArrowName } from '@Helpers/localization';
// Style
import style from './button-with-arrow.module.css';

const ButtonWithArraw = ({ cssClass = '', name, accessibility }: ButtonWithArrawType) => {
  const { lang } = useContextLanguage();

  const url = 'https://drive.google.com/file/d/1LaIh1jKh5aB0PeRSp6EEAzgCTHa3gKV3/view?usp=share_link';

  return (
    <div className={`${style.module} ${cssClass}`} title={accessibility} aria-label={accessibility}>
      <Link href={url} className={style.button} target="_blank">
        {ButtonWithArrowName[name][lang]}
      </Link>
      <span className={style.arrow} />
    </div>
  );
};

export default ButtonWithArraw;
