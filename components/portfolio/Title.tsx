// Style
import style from './portfolio.module.css';

export const Title = ({ title }: { title: string }) => <h3 className={`card-title ${style.title}`}>{title}</h3>;
