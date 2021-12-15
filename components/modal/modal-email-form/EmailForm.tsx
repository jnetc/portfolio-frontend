import { FC, useState, useCallback } from 'react';
// Component
import { ModalInput } from './ModalInput';
import { ModalTextarea } from './ModalTextarea';
import { ModalSubmitBtn } from './ModalSubmitBtn';
// Hook
import { useContextMain } from '@Hooks/useContextMain';
import { useContextStore } from '@Hooks/useContextStore';
// Type
import { ResponseType } from '@Types';
// Language
import { ErrorMessage } from '@Languages';

export const EmailForm: FC = () => {
  const { setResponse, setNotify } = useContextMain();
  const { lang } = useContextStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const getName = (val: string) => setName(val);
  const getEmail = (val: string) => setEmail(val);
  const getMessage = (val: string) => setMessage(val);

  const SendMessage = useCallback(
    ev => {
      ev.preventDefault();

      (async () => {
        try {
          const response = await fetch(`/api/nodemailer`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
          });

          const data: ResponseType = await response.json();

          setResponse({
            status: 'success',
            message: data.message[lang],
          });

          setName('');
          setEmail('');
          setMessage('');
        } catch (error) {
          setResponse({
            status: 'error',
            message: ErrorMessage[lang],
          });

          setNotify({
            status: 'error',
            message: ErrorMessage[lang],
          });
        }
      })();
    },
    [name, email, message, lang, setResponse, setNotify]
  );

  return (
    <form className="emailform" method="post" onSubmit={SendMessage}>
      <ModalInput
        typeInput="text"
        nameInput="name"
        handler={getName}
        value={name}
      />
      <ModalInput
        typeInput="email"
        nameInput="email"
        handler={getEmail}
        value={email}
      />
      <ModalTextarea nameInput="message" handler={getMessage} value={message} />
      <ModalSubmitBtn />
    </form>
  );
};
