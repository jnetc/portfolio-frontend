import { FC } from 'react';
// Components
import { GitHubLink } from '@Links/GitHub';
import { ExternalLink } from '@Links/External';

export const Links: FC<{ github: string; page: string }> = ({
  github,
  page,
}) => (
  <div className="project__links">
    {github && <GitHubLink url={github} cssClass="project__link" />}
    {page && <ExternalLink url={page} cssClass="project__link" />}
  </div>
);
