// Components
import { GitHubLink } from '@Links/GitHub';
import { ExternalLink } from '@Links/External';
import { FigmaLink } from '@Links/Figma';
// Style
import style from './portfolio.module.css';

export const Links = ({
  github,
  page,
  figma,
}: {
  github: string;
  page: string;
  figma: string;
}) => (
  <div className={style.links}>
    {github && <GitHubLink url={github} cssClass="project__link" />}
    {page && <ExternalLink url={page} cssClass="project__link" />}
    {figma && <FigmaLink url={figma} cssClass="project__link" />}
  </div>
);
