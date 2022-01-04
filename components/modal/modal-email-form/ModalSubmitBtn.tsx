import { useCallback } from 'react';
// Context
import { useContextLanguage } from '@Hooks/useContextLanguage';
import { useContextMain } from '@Hooks/useContextMain';
// Style
import style from '@Modal/modal.module.css';

export const ModalSubmitBtn = () => {
  const { lang } = useContextLanguage();
  const { response } = useContextMain();
  const submitButton = useCallback(
    (lang: string) => {
      if (lang === 'en' && response.status === 'success') return 'submitted';
      if (lang === 'ru' && response.status === 'success') return 'отправлено';
      if (lang === 'en' && response.status === 'error') return 'no submitted';
      if (lang === 'ru' && response.status === 'error') return 'не отправлено';
      if (lang === 'en') return 'submit';
      if (lang === 'ru') return 'отправить';
    },
    [response.status]
  );
  return (
    <button className={`btn ${style.button}`}>{submitButton(lang)}</button>
  );
};
