import type { ResumeProfileType, SerializerBlock } from '@Types';
import Image from 'next/image';
// Components
import { ProfileLinks } from './ProfileLinks';
// Style
import style from './profile.module.css';
// Sanity Block text
import { PortableText } from '@Sanity/sanity';

export const Profile = ({ data }: { data: ResumeProfileType }) => {
  const { _id, name, professional, summary, ...links } = data;

  const serializer = ({ children }: SerializerBlock) => {
    return <p className="paragraph">{children}</p>;
  };

  return (
    <section className={style.module}>
      <div className={style.avatar_container}>
        <Image src="/images/avatar.webp" alt="resume avatar" height={200} width={200} quality={80} className={style.avatar} priority />
      </div>
      <div className={style.title}>
        <h1 className={style.title_svg}>{name}</h1>
        <p className={style.sub_title}>{professional}</p>
        <ProfileLinks links={links} />
      </div>
      <div className={`${style.summary}`}>
        <PortableText
          value={summary}
          components={{
            block: serializer,
          }}
        />
      </div>
    </section>
  );
};
