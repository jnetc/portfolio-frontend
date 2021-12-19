// Component
import { EmailFormSVG } from './EmailFormSVG';
import { EmailForm } from './EmailForm';
// Hook
import { useContextStore } from '@Hooks/useContextStore';
import { useContextMain } from '@Hooks/useContextMain';
// Localization
import { modalContent } from '@Languages';
// Style
import style from '@Modal/modal.module.css';
import emailform from './emailform.module.css';

const ModalEmailForm = () => {
  const { lang } = useContextStore();
  const { response } = useContextMain();

  return (
    <section
      className={
        response?.status === 'success'
          ? `${style.grid} ${emailform.sended}`
          : `${style.grid}`
      }
    >
      <EmailFormSVG />
      <h1 className={style.title}>{modalContent.title[lang]}</h1>
      <p className={style.sub_title}>{modalContent.subTitle[lang]}</p>
      <EmailForm />
    </section>
  );
};

export default ModalEmailForm;
