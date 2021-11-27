import { FC } from 'react';

import { Label } from '../label/Label';
import { Title } from '../title/Title';
import { Description } from '../description/Description';
import { Links } from '../links/Links';
import { Tags } from '../tags/Tags';
// Type
import { ProjectType } from '@Types';

export const Project: FC<{ data: ProjectType }> = ({ data }) => {
  return (
    <article className="project archive">
      <span className="project__arrow" />
      <Links github={data.github_href} page={data.page_href} />
      <Label label={data.label} />
      <Title title={data.project_title} />
      <Description desc={data.description} />
      <Tags tags={data.tags} />
    </article>
  );
};
