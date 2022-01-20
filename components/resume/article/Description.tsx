import style from './article.module.css';
export const Description = ({
  desc,
  cssClass,
}: {
  desc: string;
  cssClass: string;
}) => {
  switch (cssClass) {
    case 'skills':
      return <p className={`${style.desc__skills} paragraph`}>{desc}</p>;
    case 'languages':
      return <p className={`${style.desc__lang} paragraph`}>{desc}</p>;
    case 'interests':
      return <p className={`${style.desc__int} paragraph`}>{desc}</p>;
    default:
      return (
        <p className={`${style.desc} paragraph pad-block-start`}>{desc}</p>
      );
  }
};
