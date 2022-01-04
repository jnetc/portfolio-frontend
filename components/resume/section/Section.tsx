// Components
import { Article } from '@Resume/article/Article';
// Style
import style from './section.module.css';
// Type
import { ResumeArticleType } from '@Types';
// Localization
import { resumeSection } from '@Helpers/localization';
// Context
import { useContextLanguage } from '@Hooks/useContextLanguage';

export const Section = ({
  name,
  data,
}: {
  name:
    | 'experience'
    | 'education'
    | 'interests'
    | 'skills'
    | 'languages'
    | 'summary';
  data: Array<ResumeArticleType>;
}) => {
  const { lang } = useContextLanguage();
  const leftContent = ['experience', 'education'];

  const articles = data
    .sort((a, b) => {
      if (!a.order || !b.order) return 1;
      if (a.order > b.order) return -1;
      return 1;
    })
    .map(a => {
      return (
        <Article
          key={a._id}
          data={a}
          positionLeft={leftContent.includes(name)}
          cssClass={name}
        />
      );
    });

  return (
    <section className={`${style.module} section__${name}`}>
      <h1 className={`${style.title} title__${name}`}>
        {resumeSection[name][lang]}
      </h1>
      <div className={` article__${name}`}>{articles}</div>
    </section>
  );
};
