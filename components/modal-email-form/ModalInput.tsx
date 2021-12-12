import { FC, ChangeEvent } from 'react';
// Hook
import { useStore } from '@Store';
// Types
import { InputFromType } from '@Types';
// Localization
import { modalInputs } from '@Languages';

export const ModalInput: FC<InputFromType> = ({
  typeInput,
  nameInput,
  handler,
  value,
}) => {
  const { lang } = useStore();

  const getValue = (ev: ChangeEvent<HTMLInputElement>) => {
    handler(ev.currentTarget.value);
  };

  return (
    <div className="form__input">
      <input
        className="input-field"
        type={typeInput}
        name={nameInput}
        required
        onChange={getValue}
        value={value}
      />
      <label
        className={
          value ? 'form__placeholder is-not-empty' : 'form__placeholder'
        }
      >
        {modalInputs[nameInput][lang]}
      </label>
    </div>
  );
};
