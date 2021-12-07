import { useState, useCallback, ChangeEvent } from 'react';
import Head from 'next/head';

import { MailStateType } from '@Types';

const Mailform = () => {
  const [form, setForm] = useState<MailStateType>({
    name: '',
    email: '',
    message: '',
  });

  const getValue = useCallback(
    (ev: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
      const value = ev.currentTarget.value;
      setForm(prevState => {
        prevState[name] = value;
        return prevState;
      });
    },
    []
  );

  console.log(form);

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
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        }
      )
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
    },
    [form]
  );

  return (
    <>
      <Head>
        <meta name="description" content="mailform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mailform</title>
      </Head>

      <form method="post" onSubmit={SendMessage}>
        <input
          type="text"
          name="name"
          required
          onChange={ev => getValue(ev, 'name')}
        />
        <input
          type="email"
          name="email"
          required
          onChange={ev => getValue(ev, 'email')}
        />
        <textarea
          name="message"
          cols={5}
          rows={5}
          onChange={ev => getValue(ev, 'message')}
        ></textarea>
        <button className="btn">send</button>
      </form>
    </>
  );
};

export default Mailform;
