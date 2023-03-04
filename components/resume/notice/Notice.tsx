import type { ResumeNoticeType, SerializerBlock } from '@Types';
// Components
import { NoticeSVG } from './NoticeSVG';

// Sanity Block text
import { PortableText } from '@Sanity/sanity';

// Style
import style from './notice.module.css';

export const Notice = ({ data }: { data: ResumeNoticeType }) => {
  const labelUrl = data.external_href.split('//')[1];

  const serializer = ({ children }: SerializerBlock) => {
    return <p className="paragraph">{children}</p>;
  };

  return (
    <section className={style.module}>
      <NoticeSVG />
      <h1 className={style.title}>{data.title}</h1>
      <p className={style.sub_title}>{data.subtitle}</p>
      <div className={`${style.information}`}>
        <PortableText
          renderContainerOnSingleChild={true}
          value={data.info}
          components={{
            block: serializer,
          }}
        />
      </div>
      <a
        className={`btn ${style.button}`}
        href={data.external_href}
        role="button"
        tabIndex={0}
        target="_blank"
        rel="noreferrer"
        aria-label={labelUrl}
        title={labelUrl}
      >
        {data.button_name}
      </a>
    </section>
  );
};
