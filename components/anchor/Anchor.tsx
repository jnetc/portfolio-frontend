// Context
import { useContextLanguage } from '@Hooks/useContextLanguage';
// Localization
import { anchor } from '@Helpers/localization';
// Types
import { AnchorType } from '@Types';
// Style
import style from './anchor.module.css';

const Anchor = ({ name, hash }: AnchorType) => {
  const { lang } = useContextLanguage();

  return (
    <>
      <span id={name} className={`${style.name} grid-12`} data-hash={hash}>
        {anchor[name].link[lang]}
      </span>
      <span className={style.separator} />
      <h2 className={style.desc}>{anchor[name].desc[lang]}</h2>
    </>
  );
};

export default Anchor;
