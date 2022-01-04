import { NoticeSVG } from './NoticeSVG';
// import { NoticeSVG } from './NoticeSVG2';
// Style
import style from './notice.module.css';
// Sanity Block text
import { PortableText } from '@Sanity/sanity';
// Types
import { ResumeNoticeType, SerializerBlock, SerializerContainer } from '@Types';
// Context
import { useContextLanguage } from '@Hooks/useContextLanguage';

export const Notice = ({ data }: { data: ResumeNoticeType }) => {
  const { lang } = useContextLanguage();
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
      <span className={style.subsidy}>{data.subsidy}€</span>
      {/* <p className="modal__readmore paragraph">{data.extra_info}</p> */}
      <a
        className={`btn ${style.link}`}
        href={data.external_href}
        role="button"
        tabIndex={0}
        target="_blank"
        rel="noreferrer"
        aria-label={labelUrl}
        title={labelUrl}
      >
        {lang === 'en' ? 'read more' : 'подробнее'}
      </a>
    </section>
  );
};
