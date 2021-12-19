// Context
import { useContextStore } from '@Hooks/useContextStore';
// Localization
import { anchor } from '@Languages';
// Types
import { AnchorType } from '@Types';
// Style
import style from './anchor.module.css';

const Anchor = ({ name, hash }: AnchorType) => {
  const { lang } = useContextStore();

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
