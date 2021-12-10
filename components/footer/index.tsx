import { FC } from 'react';
// Hook
import { useStore } from '@Store';
//
import { GitHubLink } from '@Links/GitHub';
import { LinkedIn } from '@Links/LinkedIn';
import { StackOverflow } from '@Links/StackOverflow';

const Footer: FC = () => {
  const { context, stackoverflow } = useStore();
  return (
    <footer className="footer mob-right-pad">
      <section className="footer__links">
        {/* <a
          href={context?.github_href}
          className="footer__link"
          role="button"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title={`go to ${context?.github_href.split('//')[1]} `}
        >
        </a> */}
        <GitHubLink url={context?.github_href || ''} cssClass="footer__link" />
        <StackOverflow
          url={stackoverflow?.link || ''}
          cssClass="footer__link"
        />
        <LinkedIn url={context?.linkedin_href || ''} cssClass="footer__link" />
        {/* <a
          href={stackoverflow?.link}
          className="footer__link"
          role="button"
          target="_blank"
          rel="noreferrer"
          aria-label="StackOverflow"
          title={`go to ${stackoverflow?.link.split('//')[1]} `}
        >
          StackOverflow
        </a> */}
        {/* <a
          href={context?.linkedin_href}
          className="footer__link"
          role="button"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title={`go to ${context?.linkedin_href.split('//')[1]} `}
        >
          LinkedIn
        </a> */}
      </section>
      <p className="footer__desc">
        The site is based with
        <a className="footer__desc-link" href="https://nextjs.org/">
          Next.js,
        </a>
        managed with
        <a className="footer__desc-link" href="https://www.sanity.io/">
          Sanity.io
        </a>
        and is hosted on the
        <a className="footer__desc-link" href="https://vercel.com/">
          Vercel.
        </a>
      </p>
    </footer>
  );
};

export default Footer;
