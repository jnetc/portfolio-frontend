import { NoticeSVG } from './NoticeSVG';
// Style
import style from './notice.module.css';
// Sanity Block text
import { PortableText } from '@Sanity/sanity';
// Types
import { ResumeNoticeType, SerializerBlock, SerializerContainer } from '@Types';

export const Notice = ({ data }: { data: ResumeNoticeType }) => {
  // Sanity block component
  // https://codesandbox.io/s/p8ms8?file=/src/Page.js:1208-1215

  const labelUrl = data.external_href.split('//')[1];

  const container = (props: SerializerContainer) => {
    return <div className={`${style.information}`}>{props.children}</div>;
  };

  const serializer = ({ children }: SerializerBlock) => {
    return <p className="paragraph">{children}</p>;
  };

  return (
    <section className={style.module}>
      <NoticeSVG />
      <h1 className={style.title}>{data.title}</h1>
      <p className={style.sub_title}>{data.subtitle}</p>
      <PortableText
        renderContainerOnSingleChild={true}
        blocks={data.info}
        serializers={{
          types: {
            block: serializer,
          },
          container,
        }}
      />
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
