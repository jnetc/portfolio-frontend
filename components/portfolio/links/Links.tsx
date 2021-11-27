import { FC } from 'react';
// Components
import { GithubLink } from '../link-github/GithibLink';
import { ExternalLink } from '../link-external/ExternalLink';

export const Links: FC<{ github: string; page: string }> = ({
  github,
  page,
}) => (
  <div className="project__links">
    {github && <GithubLink url={github} />}
    {page && <ExternalLink url={page} />}
  </div>
);
