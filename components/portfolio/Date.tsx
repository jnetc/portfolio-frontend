import style from './portfolio.module.css';
export const Date = ({ date }: { date: string }) => (
  <span className={style.date} data-date={`${date}`} />
);
