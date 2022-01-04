// Context
import { useContextStore } from '@Hooks/useContextStore';
import { useContextLanguage } from '@Hooks/useContextLanguage';
// Localization
import { stackoverflowContent } from '@Helpers/localization';
// Style
import style from './stack-overflow.module.css';

const StackOverflow = () => {
  const { stackoverflow } = useContextStore();
  const { lang } = useContextLanguage();

  if (!stackoverflow) return null;

  return (
    <section className={style.module}>
      <h1 className={style.title}>
        stack<strong>overflow</strong>
      </h1>
      <div
        className={`${style.data} ${style.left_side}`}
        title="Recent achievements: reputation, badges, and privileges earned"
      >
        <span className={style.number}>{stackoverflow.reputation}</span>
        <p className={style.label}>{stackoverflowContent.reputation[lang]}</p>
      </div>
      <div
        className={`${style.data} ${style.right_side}`}
        title="Amount answers, which i have answered for all time"
      >
        <span className={style.number}>{stackoverflow.answers}</span>
        <p className={style.label}>{stackoverflowContent.answers[lang]}</p>
      </div>
      <a
        href={stackoverflow.link}
        className={`btn ${style.button}`}
        role="button"
        target="_blank"
        rel="noreferrer"
      >
        {stackoverflowContent.button[lang]}
      </a>
    </section>
  );
};
export default StackOverflow;
