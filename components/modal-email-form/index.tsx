import { FC, useState, useCallback } from 'react';
// Component
import { EmailFormSVG } from './EmailFormSVG';
// Hook
import { useStore } from '@Store';

const content = {
  title: {
    en: 'Write me a message',
    ru: 'Напиши мне сообщение',
  },
  subTitle: {
    en: 'and i answer as soon as possible.',
    ru: 'и я отвечу как можно скорее',
  },
  inputName: {
    en: 'name',
    ru: 'имя',
  },
  inputEmail: {
    en: 'email',
    ru: 'электронная почта',
  },
  inputMessage: {
    en: 'message',
    ru: 'сообщение',
  },
};

const ModalEmailForm: FC = () => {
  const { lang } = useStore();
  const [isSend, setIsSend] = useState(false);
  const [hasErr, setHasErr] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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

  // console.log('main__', isSend, submitButton(lang, isSend, hasErr));

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
      <h1 className="modal__title">
        {lang === 'en' ? content.title.en : content.title.ru}
      </h1>
      <p className="modal__sub-title">
        {lang === 'en' ? content.subTitle.en : content.subTitle.ru}
      </p>
      <form className="emailform" method="post" onSubmit={SendMessage}>
        <div className="form__input">
          <input
            className="input-field"
            type="text"
            name="name"
            required
            onChange={ev => setName(ev.currentTarget.value)}
            value={name}
          />
          <label
            className={
              name ? 'form__placeholder is-not-empty' : 'form__placeholder'
            }
          >
            {lang === 'en' ? content.inputName.en : content.inputName.ru}
          </label>
        </div>
        <div className="form__input">
          <input
            className="input-field"
            type="email"
            name="email"
            required
            onChange={ev => setEmail(ev.currentTarget.value)}
            value={email}
          />
          <label
            className={
              email ? 'form__placeholder is-not-empty' : 'form__placeholder'
            }
          >
            {lang === 'en' ? content.inputEmail.en : content.inputEmail.ru}
          </label>
        </div>
        <div className="form__input">
          <textarea
            className="input-field"
            name="message"
            rows={3}
            required
            maxLength={500}
            onChange={ev => setMessage(ev.currentTarget.value)}
            value={message}
          />
          <label
            className={
              message ? 'form__placeholder is-not-empty' : 'form__placeholder'
            }
          >
            {lang === 'en' ? content.inputMessage.en : content.inputMessage.ru}
          </label>
        </div>
        <button className="btn modal__button">
          {submitButton(lang, isSend, hasErr)}
        </button>
      </form>
    </section>
  );
};

export default ModalEmailForm;
