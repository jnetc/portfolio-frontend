import { FC } from 'react';
import Link from 'next/link';
// Components
import { Bulb } from '@Home/bulb-icon/Bulb';
// Sanity Block text
import { PortableText } from '@Sanity/sanity';
// Hook
import { useStore } from '@Store';
// Types
import { SanitySerializer } from '@Types';

const primaryBtn = {
  en: 'Get in touch',
  ru: 'Связаться',
};
const secondaryBtn = {
  en: 'For employers',
  ru: 'Работадателям',
};

export const HomeLeftSide: FC = () => {
  const { context, lang } = useStore();
  // Sanity block component
  // https://github.com/coreyward/react-portable-text
  const serializer = ({ children }: SanitySerializer) => {
    return <p className="home-left-side__desc">{children}</p>;
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
          className="home-btns__button"
          title={lang === 'en' ? primaryBtn.en : primaryBtn.ru}
          aria-label="contact me by email"
        >
          {lang === 'en' ? primaryBtn.en : primaryBtn.ru}
        </button>
        <Link href="#portfolio">
          <a className="home-btns__link" role="button">
            {lang === 'en' ? secondaryBtn.en : secondaryBtn.ru}
            <span className="link-arrow-icon" />
          </a>
        </Link>
      </div>
    </header>
  );
};
