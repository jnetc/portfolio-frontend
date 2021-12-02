import { FC } from 'react';

import { Label } from '@Portfolio/label/Label';
import { Title } from '@Portfolio/title/Title';
import { Description } from '@Portfolio/description/Description';
import { Links } from '@Portfolio/links/Links';
import { Tags } from '@Portfolio/tags/Tags';
// Type
import { ProjectType } from '@Types';

export const Project: FC<{ data: ProjectType }> = ({ data }) => {
  return (
    <article className="project archive">
      <span className="project__arrow" />
      <Links github={data.github_href} page={data.page_href} />
      <Label label={data.label} />
      <Title title={data.project_title} />
      <div className="project__desc">
        <Description desc={data.description} />
      </div>
      <Tags tags={data.tags} />
    </article>
  );
};
