// Component
import { EmailFormSVG } from './EmailFormSVG';
import { EmailForm } from './EmailForm';
// Hook
import { useContextLanguage } from '@Hooks/useContextLanguage';
import { useContextMain } from '@Hooks/useContextMain';
// Localization
import { modalContent } from '@Helpers/localization';
// Style
import style from '@Modal/modal.module.css';
import emailform from './emailform.module.css';

const ModalEmailForm = () => {
  const { lang } = useContextLanguage();
  const { response } = useContextMain();

  return (
    <section className={response?.status === 'success' ? `${style.grid} ${emailform.sended}` : `${style.grid}`}>
      <EmailFormSVG />
      <h2 className={style.title}>{modalContent.title[lang]}</h2>
      <p className={style.sub_title}>{modalContent.subTitle[lang]}</p>
      <EmailForm />
    </section>
  );
};

export default ModalEmailForm;
