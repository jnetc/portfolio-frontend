// Components
import { GitHubLink } from '@Links/GitHub';
import { ExternalLink } from '@Links/External';
// Style
import style from './portfolio.module.css';

export const Links = ({ github, page }: { github: string; page: string }) => (
  <div className={style.links}>
    {github && <GitHubLink url={github} cssClass="project__link" />}
    {page && <ExternalLink url={page} cssClass="project__link" />}
  </div>
);
