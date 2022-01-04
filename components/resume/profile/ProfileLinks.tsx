import style from './profile.module.css';
// Conponent
import { StackOverflow } from '@Links/StackOverflow';
import { GitHubLink } from '@Links/GitHub';
import { EmailLink } from '@Links/Email';
// Type
import { ResumeLinksType } from '@Types';

export const ProfileLinks = ({ links }: { links: ResumeLinksType }) => {
  // const labelUrl = links.email.split('mailto:')[1];
  return (
    <div className={style.links}>
      <GitHubLink url={links.github_href} />
      <StackOverflow url={links.stackoverflow_href} />
      <EmailLink url={links.email} />
      {/* <span className={style.email_tooltip} aria-label="click to copy email">
      </span> */}
    </div>
  );
};
