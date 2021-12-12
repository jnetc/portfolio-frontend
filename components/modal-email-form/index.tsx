import { FC, useState, useCallback } from 'react';
// Component
import { EmailFormSVG } from './EmailFormSVG';
import { ModalInput } from './ModalInput';
import { ModalTextarea } from './ModalTextarea';
import { ModalSubmitBtn } from './ModalSubmitBtn';
// Hook
import { useStore } from '@Store';
// Localization
import { modalContent } from '@Languages';

const ModalEmailForm: FC = () => {
  const { lang } = useStore();
  const [isSend, setIsSend] = useState(false);
  const [hasErr, setHasErr] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const getName = (val: string) => setName(val);
  const getEmail = (val: string) => setEmail(val);
  const getMessage = (val: string) => setMessage(val);

  const SendMessage = useCallback(
    ev => {
      ev.preventDefault();
      fetch(
        `https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      )
        .then(response => response.json())
        .then(data => {
          setIsSend(data.success === 'true');
          setName('');
          setEmail('');
          setMessage('');
        })
        .catch(error => {
          console.log(error);

          setHasErr(true);
        });
    },
    [name, email, message]
  );
  return (
    <section className={isSend ? 'modal-grid sended' : 'modal-grid'}>
      <EmailFormSVG />
      <h1 className="modal__title">{modalContent.title[lang]}</h1>
      <p className="modal__sub-title">{modalContent.subTitle[lang]}</p>
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
        <ModalTextarea
          nameInput="message"
          handler={getMessage}
          value={message}
        />
        <ModalSubmitBtn status={isSend} error={hasErr} />
      </form>
    </section>
  );
};

export default ModalEmailForm;
