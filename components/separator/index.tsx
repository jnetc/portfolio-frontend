import { FC } from 'react';
// Context
import { useStore } from '@Store';
// Types
import { SeparatorsType } from '@Types';

const separators = {
  portfolio: {
    title: {
      ru: 'Предыдущие интересные работы',
      en: 'Previous interesting projects',
    },
    desc: {
      ru: 'Архив портфолио',
      en: 'portfolio archive',
    },
  },
  about: {
    title: {
      ru: 'Моё образование и сертификация',
      en: 'My Education and Certification ',
    },
    desc: {
      ru: 'как разработчика',
      en: 'as a developer',
    },
  },
};

const Separator: FC<{ separator: SeparatorsType }> = ({ separator }) => {
  const { lang } = useStore();

  return (
    <>
      <h2 className="separator-title mob-right-pad">
        {lang === 'en'
          ? separators[separator].title.en
          : separators[separator].title.ru}
      </h2>

      <span className="separator-desc">
        {lang === 'en'
          ? separators[separator].desc.en
          : separators[separator].desc.ru}
      </span>
    </>
  );
};

export default Separator;
