import type { TextareaFromType } from '@Types';
import { ChangeEvent } from 'react';
// Hook
import { useContextLanguage } from '@Hooks/useContextLanguage';

// Localization
import { modalTextarea } from '@Helpers/localization';

// Style
import emailform from './emailform.module.css';

export const ModalTextarea = ({ nameInput, handler, value }: TextareaFromType) => {
  const { lang } = useContextLanguage();
  const maxLength = 1500;

  const valueTextArea = {
    ru: `длина сообщения ${value.length} / 1500`,
    en: `length message ${value.length} / 1500`,
    fi: `viestin pituus ${value.length} / 1500`,
  };

  const getValue = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    handler(ev.currentTarget.value);
  };

  return (
    <fieldset className={emailform.input_field}>
      <textarea className={emailform.input} name={nameInput} rows={3} required maxLength={maxLength} onChange={getValue} value={value} />
      <label className={value ? `${emailform.placeholder} ${emailform.not_empty}` : `${emailform.placeholder}`}>
        {modalTextarea[nameInput][lang]}
      </label>
      <span className={`${emailform.message_limit} ${value.length === 1500 ? emailform.limit : ''}`}>{valueTextArea[lang]}</span>
    </fieldset>
  );
};
