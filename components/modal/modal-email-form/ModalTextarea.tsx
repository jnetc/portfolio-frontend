import { ChangeEvent } from 'react';
// Hook
import { useContextStore } from '@Hooks/useContextStore';
// Types
import { TextareaFromType } from '@Types';
// Localization
import { modalTextarea } from '@Languages';
// Style
import emailform from './emailform.module.css';

export const ModalTextarea = ({
  nameInput,
  handler,
  value,
}: TextareaFromType) => {
  const { lang } = useContextStore();

  const getValue = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    handler(ev.currentTarget.value);
  };

  return (
    <fieldset className={emailform.input_field}>
      <textarea
        className={emailform.input}
        name={nameInput}
        rows={3}
        required
        maxLength={500}
        onChange={getValue}
        value={value}
      />
      <label
        className={
          value
            ? `${emailform.placeholder} ${emailform.not_empty}`
            : `${emailform.placeholder}`
        }
      >
        {modalTextarea[nameInput][lang]}
      </label>
    </fieldset>
  );
};
