import { FC, ChangeEvent, useCallback } from 'react';
// Hook
import { useContextStore } from '@Hooks/useContextStore';
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
  const { lang } = useContextStore();

  const getValue = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      handler(ev.currentTarget.value);
    },
    [handler]
  );

  return (
    <fieldset className="form__input">
      <input
        className="input-field"
        type={typeInput}
        name={nameInput}
        inputMode={typeInput}
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
    </fieldset>
  );
};
