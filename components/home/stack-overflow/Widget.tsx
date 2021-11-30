import { FC } from 'react';
// Hook
import { useStore } from '@Store';

export const Widget: FC = () => {
  const { stackoverflow, lang } = useStore();

  if (!stackoverflow) return null;

  return (
    <section className="widget">
      <h1>
        stack<strong>overflow</strong>
      </h1>
      <div
        className="widget__data widget__left-side"
        title="Recent achievements: reputation, badges, and privileges earned"
      >
        <span className="widget__num">{stackoverflow.reputation}</span>
        <p className="widget__label">
          {lang === 'en' ? 'Reputation' : 'Репутация'}
        </p>
      </div>
      <div
        className="widget__data widget__right-side"
        title="Amount answers, which i have answered for all time"
      >
        <span className="widget__num">{stackoverflow.answers}</span>
        <p className="widget__label">{lang === 'en' ? 'Answers' : 'Ответы'}</p>
      </div>
      <a
        href={stackoverflow.link}
        className="btn row-4"
        role="button"
        target="_blank"
        rel="noreferrer"
      >
        {lang === 'en' ? 'follow' : 'перейти'}
      </a>
    </section>
  );
};
