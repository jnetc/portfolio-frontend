import { FC } from 'react';
// Components
import { Bulb } from '@Home/bulb-icon/Bulb';
// Sanity Block text
import { PortableText } from '@Sanity/sanity';
// Hook
import { useStore } from '@Store';
// Types
import { SanitySerializer } from '@Types';
// Helper
import { animationOptimization } from '@Helpers/functions';

const primaryBtn = {
  en: 'Get in touch',
  ru: 'Связаться',
};
const secondaryBtn = {
  en: 'For employers',
  ru: 'Нанимателям',
};

export const HomeLeftSide: FC = () => {
  const { context, lang, toggleModal } = useStore();
  // Sanity block component
  // https://github.com/coreyward/react-portable-text
  const serializer = ({ children }: SanitySerializer) => {
    return <p className="home-left-side__desc">{children}</p>;
  };

  const openModal = (name: string) => {
    animationOptimization(1000);
    toggleModal({ show: true, name });
  };

  return (
    <header className="home-left-side mob-right-pad">
      <div className="svg-title" title="your ideas & my skills">
        <svg viewBox="0 0 625 220">
          <text className="svg-title__text ampersand" x="-5" y="210">
            &
          </text>
          <text className="svg-title__text ampersand-stroke" x="12" y="210">
            &
          </text>
          <Bulb />
          <text className="svg-title__text text-idea" x="140" y="125">
            your ideas
          </text>
          <text className="svg-title__text text-skill" x="175" y="212">
            my skills
          </text>
        </svg>
      </div>
      <h1 className="home-left-side__title">{context?.title}</h1>
      <PortableText
        blocks={context?.slogan}
        serializers={{
          types: {
            block: serializer,
          },
        }}
      />
      <div className="home-btns">
        <button
          className="home-contact-btn"
          title={lang === 'en' ? primaryBtn.en : primaryBtn.ru}
          aria-label="contact me by email"
          onClick={() => openModal('emailform')}
        >
          {lang === 'en' ? primaryBtn.en : primaryBtn.ru}
        </button>
        <button
          className="home-employers-btn"
          title={lang === 'en' ? secondaryBtn.en : secondaryBtn.ru}
          aria-label="information for employers"
          onClick={() => openModal('employers')}
        >
          {lang === 'en' ? secondaryBtn.en : secondaryBtn.ru}
          <span className="link-arrow-icon" />
        </button>
      </div>
    </header>
  );
};
