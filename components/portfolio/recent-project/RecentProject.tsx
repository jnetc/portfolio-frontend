import { FC } from 'react';
// Components
import { Label } from '@Portfolio/label/Label';
import { Title } from '@Portfolio/title/Title';
import { Description } from '@Portfolio/description/Description';
import { Tags } from '@Portfolio/tags/Tags';
import { Links } from '@Portfolio/links/Links';
import Img from '@Img';
// Type
import { ProjectType } from '@Types';

export const RecentProject: FC<{ data: ProjectType; position: string }> = ({
  data,
  position,
}) => {
  return (
    <section className={`grid mob-right-pad grid-12 project-${position}`}>
      <article className="project recent">
        <Label label={data.label_recent} />
        <Title title={data.project_title} />
        <Description desc={data.description} />
        <Tags tags={data.tags} />
        <Links github={data.github_href} page={data.page_href} />
      </article>
      <a
        className="project-image"
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
