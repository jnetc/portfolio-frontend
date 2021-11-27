import { FC } from 'react';
import Image from 'next/image';
// Components
import { Label } from '../label/Label';
import { Title } from '../title/Title';
import { Description } from '../description/Description';
import { Tags } from '../tags/Tags';
import { Links } from '../links/Links';
// Type
import { ProjectType } from '@Types';
// Sanity
import { urlFor } from '@Sanity/sanity';

export const RecentProject: FC<{ data: ProjectType; position: string }> = ({
  data,
  position,
}) => {
  const imageUrl = urlFor(data.poster).url() || '';

  return (
    <section className={`grid mob-right-pad project-${position}`}>
      <article className="project recent">
        <Label label={data.label_recent} />
        <Title title={data.project_title} />
        <Description desc={data.description} />
        <Tags tags={data.tags} />
        <Links github={data.github_href} page={data.page_href} />
      </article>
      <div className="project-image">
        <Image
          src={imageUrl}
          alt="project"
          objectFit="fill"
          layout="fill"
          quality={80}
          priority
        />
      </div>
    </section>
  );
};
