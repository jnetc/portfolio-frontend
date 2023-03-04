import type { InputFromType } from '@Types';
import { ChangeEvent, useCallback } from 'react';
// Hook
import { useContextLanguage } from '@Hooks/useContextLanguage';
// Localization
import { modalInputs } from '@Helpers/localization';
// Style
import emailform from './emailform.module.css';

export const ModalInput = ({ typeInput, nameInput, handler, value }: InputFromType) => {
  const { lang } = useContextLanguage();

  const getValue = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      handler(ev.currentTarget.value);
    },
    [handler]
  );

  return (
    <fieldset className={emailform.input_field}>
      <input
        className={emailform.input}
        type={typeInput}
        name={nameInput}
        inputMode={typeInput}
        required
        onChange={getValue}
        value={value}
      />
      <label className={value ? `${emailform.placeholder} ${emailform.not_empty}` : `${emailform.placeholder}`}>
        {modalInputs[nameInput][lang]}
      </label>
    </fieldset>
  );
};
