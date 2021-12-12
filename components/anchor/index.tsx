import { FC } from 'react';
// Context
import { useStore } from '@Store';
// Types
import { AnchorType } from '@Types';
// Localization
import { anchor } from '@Languages';

const Anchor: FC<AnchorType> = ({ name, hash }) => {
  const { lang } = useStore();

  return (
    <>
      <span id={name} className="anchor" data-hash={hash}>
        {anchor[name].link[lang]}
      </span>
      <span className="anchor-separator" />

      <h2 className="anchor-desc">{anchor[name].desc[lang]}</h2>
    </>
  );
};

export default Anchor;
