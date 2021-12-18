import { FC } from 'react';
// Context
import { useContextStore } from '@Hooks/useContextStore';
// Types
import { AnchorType } from '@Types';
// Localization
import { anchor } from '@Languages';
// Style
import style from './anchor.module.css';

const Anchor: FC<AnchorType> = ({ name, hash }) => {
  const { lang } = useContextStore();

  return (
    <>
      <span id={name} className={`${style.name} grid-12`} data-hash={hash}>
        {anchor[name].link[lang]}
      </span>
      <span className={style.separator} />

      <h2 className={style.desc}>{anchor[name].desc[lang]}</h2>
      {/* <span id={name} className="anchor grid-12" data-hash={hash}>
        {anchor[name].link[lang]}
      </span>
      <span className="anchor-separator" />

      <h2 className="anchor-desc">{anchor[name].desc[lang]}</h2> */}
    </>
  );
};

export default Anchor;
