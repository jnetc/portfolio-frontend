import Image from 'next/image';
import { ProfileLinks } from './ProfileLinks';
import ButtonWithArraw from '@ButtonWithArrow';
// Style
import style from './profile.module.css';
// Sanity Block text
import { PortableText } from '@Sanity/sanity';
// Types
import {
  ResumeProfileType,
  SerializerBlock,
  SerializerContainer,
} from '@Types';

export const Profile = ({ data }: { data: ResumeProfileType }) => {
  const { _id, name, professional, summary, ...links } = data;
  // Sanity block component
  // https://codesandbox.io/s/p8ms8?file=/src/Page.js:1208-1215

  const container = (props: SerializerContainer) => {
    return <div className={`${style.summary}`}>{props.children}</div>;
  };

  const serializer = ({ children }: SerializerBlock) => {
    return <p className="paragraph">{children}</p>;
  };

  return (
    <section className={style.module}>
      <div className={style.avatar_container}>
        <Image
          src="/images/avatar.png"
          alt="resume avatar"
          height={200}
          width={200}
          layout="responsive"
          objectFit="contain"
          quality={80}
          className={style.avatar}
          priority
        />
      </div>
      <div className={style.title}>
        <h1 className={style.title_svg}>{name}</h1>
        <p className={style.sub_title}>{professional}</p>
        <ProfileLinks links={links} />
      </div>
      <PortableText
        blocks={summary}
        serializers={{
          types: {
            block: serializer,
          },
          container,
        }}
      />
      <ButtonWithArraw
        cssClass={style.button}
        name="back"
        accessibility="back to home"
      />
    </section>
  );
};
