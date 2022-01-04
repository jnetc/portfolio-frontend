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
    {github && <GitHubLink url={github} />}
    {page && <ExternalLink url={page} />}
    {figma && <FigmaLink url={figma} />}
  </div>
);
