// Components
import { Label } from '@Portfolio/Label';
import { Title } from '@Portfolio/Title';
import { Description } from '@Portfolio/Description';
import { Tags } from '@Portfolio/tags/Tags';
import { Links } from '@Portfolio/Links';
import { Date } from '@Portfolio/Date';
import Img from '@Img';
// Type
import { ProjectType } from '@Types';
// Style
import style from './portfolio.module.css';

export const RecentProject = ({
  data,
  position,
}: {
  data: ProjectType;
  position: string;
}) => {
  return (
    <section className={`grid mob-right-pad grid-12 ${position}`}>
      <article className={`${style.project} ${style.recent}`}>
        <Label label={data.label_recent} />
        <Title title={data.project_title} />
        <Date date={data.project_completed} />
        <Description desc={data.description} />
        <Tags tags={data.tags} />
        <Links
          github={data.github_href}
          page={data.page_href}
          figma={data.figma_href}
        />
      </article>
      <a
        className={style.image}
        href={data.page_href}
        title={data.page_href}
        target="_blank"
        rel="noreferrer"
      >
        <Img
          pathImage={data.poster}
          objectFit="fill"
          alt={data.project_title}
        />
      </a>
    </section>
  );
};
