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
      ru: 'Мои недавние работы',
      en: 'My recent works',
    },
  },
  skills: {
    link: {
      ru: 'навыки',
      en: 'skills',
    },
    desc: {
      ru: 'Какие навыки у меня есть',
      en: 'Which skills do i have',
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
