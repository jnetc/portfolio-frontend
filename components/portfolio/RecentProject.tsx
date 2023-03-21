// Components
import { Title } from '@Portfolio/Title';
import { Description } from '@Portfolio/Description';
import { Tags } from '@Portfolio/tags/Tags';
import { Links } from '@Portfolio/Links';
import { Date } from '@Portfolio/Date';
// Hooks
import { useContextLanguage } from '@Hooks/useContextLanguage';
import { useTransitionObserver } from '@Hooks/useTransitionObserver';
// Helpers
import { dataTranslate } from '@Helpers/functions';
// Type
import { ProjectType } from '@Types';
// Style
import style from './portfolio.module.css';

export const RecentProject = ({ data, position }: { data: ProjectType; position: boolean }) => {
  const { lang } = useContextLanguage();
  const projectCompleted = dataTranslate(data.project_completed, lang);

  useTransitionObserver('transition');

  return (
    <section className={`grid mob-right-pad grid-12 ${position ? `${style.left} project-margin` : `${style.right} project-margin`}`}>
      <article className={`${style.project} ${style.recent}`}>
        <Title title={data.project_title} />
        <Date date={projectCompleted} />
        <Description desc={data.description} />
        <Tags tags={data.tags} />
        <Links github={data.github_href} page={data.page_href} figma={data.figma_href} />
      </article>
      <a className={`${style.video} transition`} href={data.page_href} title={data.page_href} target="_blank" rel="noreferrer">
        <video muted loop poster="./images/poster_timamih.png">
          href={data.page_href}
          <source src="./video/timamih.webm" type="video/webm" />
          title={data.page_href}
        </video>
      </a>
    </section>
  );
};
