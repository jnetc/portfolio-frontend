// Context
import { useContextLanguage } from '@Hooks/useContextLanguage';
// Localization
import { separators } from '@Helpers/localization';
// Style
import style from './separator.module.css';

const Separator = ({ name }: { name: 'portfolio' | 'about' }) => {
  const { lang } = useContextLanguage();

  return (
    <>
      <h2 className={`${style.title} mob-right-pad`}>
        {separators[name].title[lang]}
      </h2>

      <span className={style.desc}>{separators[name].desc[lang]}</span>
    </>
  );
};

export default Separator;
