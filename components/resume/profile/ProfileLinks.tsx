import style from './profile.module.css';
// Conponent
import { StackOverflow } from '@Links/StackOverflow';
import { GitHubLink } from '@Links/GitHub';
import { EmailLink } from '@Links/Email';
import { LinkedIn } from '@Links/LinkedIn';
// Type
import { ResumeLinksType } from '@Types';

export const ProfileLinks = ({ links }: { links: ResumeLinksType }) => {
  return (
    <div className={style.links}>
      <GitHubLink url={links.github_href} />
      <StackOverflow url={links.stackoverflow_href} />
      <LinkedIn url={links.linkedin_href} />
      <EmailLink url={links.email} />
      <span>{links.location}</span>
    </div>
  );
};
