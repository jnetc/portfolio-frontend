// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Tutorial https://blog.logrocket.com/send-emails-nodejs-nodemailer/
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
// Type
import { ResponseType, RequestBodyType } from '@Types';

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseType>) => {
  const { name, email, message }: RequestBodyType = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_GMAIL,
      pass: process.env.NEXT_PUBLIC_GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"devan.fi" ${process.env.NEXT_PUBLIC_GMAIL}`,
    to: process.env.NEXT_PUBLIC_GMAIL,
    subject: `Пишет мне ${name} с сайта devan.fi`,
    html: `
    <h1>От ${name}</h1>
    <p>${message}</p>
    <h5>Обратный адрес <a href="mailto:${email}">${email}</a></h5>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);

    res.send({
      status: 'success',
      message: {
        ru: 'Ваше сообщение успешно отправленно!',
        en: 'Your message was sucessful sended!',
      },
    });
  } catch (error) {
    res.send({
      status: 'error',
      message: {
        en: 'Something went wrong!',
        ru: 'Что-то пошло не так!',
      },
    });
  }
};

export default handler;
