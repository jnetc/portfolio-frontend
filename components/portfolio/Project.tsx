// Components
import { Label } from '@Portfolio/Label';
import { Title } from '@Portfolio/Title';
import { Description } from '@Portfolio/Description';
import { Links } from '@Portfolio/Links';
import { Tags } from '@Portfolio/tags/Tags';
// Type
import { ProjectType } from '@Types';
// Style
import style from './portfolio.module.css';

export const Project = ({ data }: { data: ProjectType }) => {
  return (
    <article className={`${style.project} ${style.archive}`}>
      <span className={style.arrow} />
      <Links github={data.github_href} page={data.page_href} />
      <Label label={data.label} />
      <Title title={data.project_title} />
      <div className={style.desc}>
        <Description desc={data.description} />
      </div>
      <Tags tags={data.tags} />
    </article>
  );
};
