import { FC } from 'react';
// Components
import { GithubLink } from '@Portfolio/link-github/GithibLink';
import { ExternalLink } from '@LinkExternal';

export const Links: FC<{ github: string; page: string }> = ({
  github,
  page,
}) => (
  <div className="project__links">
    {github && <GithubLink url={github} />}
    {page && <ExternalLink url={page} cssClass="project__link" />}
  </div>
);
