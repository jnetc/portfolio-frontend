import style from './article.module.css';
export const Date = ({ date }: { date: string }) => (
  <span className={style.date} data-date={`${date}`} />
);
