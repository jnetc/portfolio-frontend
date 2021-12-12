import { FC, ChangeEvent } from 'react';
// Hook
import { useStore } from '@Store';
// Types
import { TextareaFromType } from '@Types';
// Localization
import { modalTextarea } from '@Languages';

export const ModalTextarea: FC<TextareaFromType> = ({
  nameInput,
  handler,
  value,
}) => {
  const { lang } = useStore();

  const getValue = (ev: ChangeEvent<HTMLTextAreaElement>) => {
    handler(ev.currentTarget.value);
  };

  return (
    <div className="form__input">
      <textarea
        className="input-field"
        name={nameInput}
        rows={3}
        required
        maxLength={500}
        onChange={getValue}
        value={value}
      />
      <label
        className={
          value ? 'form__placeholder is-not-empty' : 'form__placeholder'
        }
      >
        {modalTextarea[nameInput][lang]}
      </label>
    </div>
  );
};
