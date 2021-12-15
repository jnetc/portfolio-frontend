import { FC, useCallback } from 'react';
// Hook
import { useContextStore } from '@Hooks/useContextStore';
import { useContextMain } from '@Hooks/useContextMain';

export const ModalSubmitBtn: FC = () => {
  const { lang } = useContextStore();
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
  return <button className="btn modal__button">{submitButton(lang)}</button>;
};
