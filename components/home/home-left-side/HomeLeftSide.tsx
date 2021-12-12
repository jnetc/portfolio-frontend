import { FC } from 'react';
// Components
import { Bulb } from '@Home/bulb-icon/Bulb';
import { HomeLeftButton } from '@Home/home-left-side/HomeLeftButton';
// Sanity Block text
import { PortableText } from '@Sanity/sanity';
// Hook
import { useStore } from '@Store';
// Types
import { SerializerBlock } from '@Types';

export const HomeLeftSide: FC = () => {
  const { context } = useStore();
  // Sanity block component
  // https://github.com/coreyward/react-portable-text
  const serializer = ({ children }: SerializerBlock) => {
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
        <HomeLeftButton
          style="primary"
          open="emailform"
          accessibility="contact me by email"
        />
        <HomeLeftButton
          style="secondary"
          open="employers"
          accessibility="information for employers"
        />
      </div>
    </header>
  );
};
