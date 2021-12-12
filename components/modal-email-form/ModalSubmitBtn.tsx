import { FC, useCallback } from 'react';
// Hook
import { useStore } from '@Store';

export interface SumbitButtonType {
  status: boolean;
  error: boolean;
}

export const ModalSubmitBtn: FC<SumbitButtonType> = ({ status, error }) => {
  const { lang } = useStore();
  const submitButton = useCallback(
    (lang: string, submitted: boolean, err: boolean) => {
      if (lang === 'en' && submitted) return 'submitted';
      if (lang === 'ru' && submitted) return 'отправлено';
      if (lang === 'en' && err) return 'no submitted';
      if (lang === 'ru' && err) return 'не отправлено';
      if (lang === 'en') return 'submit';
      if (lang === 'ru') return 'отправить';
    },
    []
  );
  return (
    <button className="btn modal__button">
      {submitButton(lang, status, error)}
    </button>
  );
};
