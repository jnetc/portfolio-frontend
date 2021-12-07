import { FC } from 'react';
// Sanity Block text
import { PortableText } from '@Sanity/sanity';
// Component
import { ForEmployersSVG } from './ForEmployers';
// Hook
import { useStore } from '@Store';
// Types
import { SanitySerializer } from '@Types';

const ModalForEmployers: FC = () => {
  const { lang, context } = useStore();

  const labelUrl = context?.modal.modal_href.split('//')[1];

  const serializer = ({ children }: SanitySerializer) => {
    return <p className="modal__information paragraph">{children}</p>;
  };

  return (
    <section className="modal-grid">
      <ForEmployersSVG />
      <h1 className="modal__title">{context?.modal.title}</h1>
      <p className="modal__sub-title">{context?.modal.subtitle}</p>
      <PortableText
        blocks={context?.modal.info}
        serializers={{
          types: {
            block: serializer,
          },
        }}
      />
      <span className="subsidy">{context?.modal.subsidy}</span>
      <p className="modal__readmore paragraph">{context?.modal.extra_info}</p>
      <a
        className="btn modal__link"
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
