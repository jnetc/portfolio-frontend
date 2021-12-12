import { FC } from 'react';
// Context
import { useStore } from '@Store';
// Localization
import { separators } from '@Languages';

const Separator: FC<{ name: 'portfolio' | 'about' }> = ({ name }) => {
  const { lang } = useStore();

  return (
    <>
      <h2 className="separator-title mob-right-pad">
        {separators[name].title[lang]}
      </h2>

      <span className="separator-desc">{separators[name].desc[lang]}</span>
    </>
  );
};

export default Separator;
