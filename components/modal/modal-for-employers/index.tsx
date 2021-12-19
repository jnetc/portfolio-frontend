// Sanity Block text
import { PortableText } from '@Sanity/sanity';
// Component
import { ForEmployersSVG } from './ForEmployers';
// Hook
import { useContextStore } from '@Hooks/useContextStore';
// Types
import { SerializerBlock } from '@Types';
// Style
import style from '@Modal/modal.module.css';
import employers from './employers.module.css';

const ModalForEmployers = () => {
  const { lang, context } = useContextStore();

  const labelUrl = context?.modal.modal_href.split('//')[1];

  const serializer = ({ children }: SerializerBlock) => {
    return <p className={`${employers.information} paragraph`}>{children}</p>;
  };

  return (
    <section className={style.grid}>
      <ForEmployersSVG />
      <h1 className={style.title}>{context?.modal.title}</h1>
      <p className={style.sub_title}>{context?.modal.subtitle}</p>
      <PortableText
        blocks={context?.modal.info}
        serializers={{
          types: {
            block: serializer,
          },
        }}
      />
      <span className={employers.subsidy}>{context?.modal.subsidy}</span>
      <p className="modal__readmore paragraph">{context?.modal.extra_info}</p>
      <a
        className={`btn ${employers.link}`}
        href={context?.modal.modal_href}
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

export default ModalForEmployers;
