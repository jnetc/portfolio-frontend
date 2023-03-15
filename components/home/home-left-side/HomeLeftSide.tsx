import type { SerializerBlock } from '@Types';

// Hook
import { useContextStore } from '@Hooks/useContextStore';

// Components
import { Bulb } from '@Home/bulb-icon/Bulb';
import { HomeLeftButton } from '@Home/home-left-side/HomeLeftButton';
import ButtonWithArraw from '@ButtonWithArrow';

// Sanity Block text
import { PortableText } from '@Sanity/sanity';

export const HomeLeftSide = () => {
  const { context } = useContextStore();

  const titleSerialize = ({ children }: SerializerBlock) => {
    return <h1 className="home-left-side__desc">{children}</h1>;
  };

  const extraSerialize = ({ children }: SerializerBlock) => {
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
      <div>
        <PortableText
          value={context?.title}
          components={{
            block: titleSerialize,
          }}
        />
        <PortableText
          value={context?.extra}
          components={{
            block: extraSerialize,
          }}
        />
      </div>
      <div className="home-btns">
        <HomeLeftButton name="contact" accessibility="contact me by email" />
        <ButtonWithArraw cssClass="" route="resume" name="resume" accessibility="resume for employers" />
      </div>
    </header>
  );
};
