// Context
import { useContextStore } from '@Hooks/useContextStore';
// Localization
import { separators } from '@Languages';
// Style
import style from './separator.module.css';

const Separator = ({ name }: { name: 'portfolio' | 'about' }) => {
  const { lang } = useContextStore();

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
