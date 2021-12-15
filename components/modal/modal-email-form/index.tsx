import { FC } from 'react';
// Component
import { EmailFormSVG } from './EmailFormSVG';
import { EmailForm } from './EmailForm';
// Hook
import { useContextStore } from '@Hooks/useContextStore';
import { useContextMain } from '@Hooks/useContextMain';
// Localization
import { modalContent } from '@Languages';

const ModalEmailForm: FC = () => {
  const { lang } = useContextStore();
  const { response } = useContextMain();

  return (
    <section
      className={
        response?.status === 'success' ? 'modal-grid sended' : 'modal-grid'
      }
    >
      <EmailFormSVG />
      <h1 className="modal__title">{modalContent.title[lang]}</h1>
      <p className="modal__sub-title">{modalContent.subTitle[lang]}</p>
      <EmailForm />
    </section>
  );
};

export default ModalEmailForm;
