// Style
import style from './portfolio.module.css';

export const Label = ({ label }: { label: string }) => (
  <span className={style.label}>{label}</span>
);
