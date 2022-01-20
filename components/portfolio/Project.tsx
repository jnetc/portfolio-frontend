// Components
import { Title } from '@Portfolio/Title';
import { Description } from '@Portfolio/Description';
import { Links } from '@Portfolio/Links';
import { Tags } from '@Portfolio/tags/Tags';
import { Date } from '@Portfolio/Date';
// Type
import { ProjectType } from '@Types';
// Style
import style from './portfolio.module.css';

export const Project = ({ data }: { data: ProjectType }) => {
  return (
    <article className={`${style.project} ${style.archive}`}>
      <span className={style.arrow} />
      <Links
        github={data.github_href}
        page={data.page_href}
        figma={data.figma_href}
      />
      <Title title={data.project_title} />
      <Date date={data.project_completed} />
      <div className={style.desc}>
        <Description desc={data.description} />
      </div>
      <Tags tags={data.tags} />
    </article>
  );
};
