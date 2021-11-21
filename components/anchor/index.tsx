import { FC } from 'react';
// Context
import { useStore } from '@Store';
// Types
import { AnchorType, HashType } from '@Types';

const anchors = {
  portfolio: {
    link: {
      ru: 'портфолио',
      en: 'portfolio',
    },
    desc: {
      ru: 'Некоторые мои работы',
      en: 'Some of my works',
    },
  },
  skills: {
    link: {
      ru: 'навыки',
      en: 'skills',
    },
    desc: {
      ru: 'Сферы где имею опыт',
      en: 'Areas in which i have experience',
    },
  },
  about: {
    link: {
      ru: 'обо мне',
      en: 'about me',
    },
    desc: {
      ru: 'Моя история разработчика',
      en: 'My developer story',
    },
  },
};

const Anchor: FC<{ anchor: AnchorType; hash: HashType }> = ({
  anchor,
  hash,
}) => {
  const { lang } = useStore();

  return (
    <>
      <span id={anchor} className="anchor" data-hash={hash}>
        {lang === 'en' ? anchors[anchor].link.en : anchors[anchor].link.ru}
      </span>
      <span className="anchor-separator" />

      <h2 className="anchor-desc">
        {lang === 'en' ? anchors[anchor].desc.en : anchors[anchor].desc.ru}
      </h2>
    </>
  );
};

export default Anchor;
