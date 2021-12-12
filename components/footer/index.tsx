import { FC } from 'react';
// Hook
import { useStore } from '@Store';
// Component
import { GitHubLink } from '@Links/GitHub';
import { LinkedIn } from '@Links/LinkedIn';
import { StackOverflow } from '@Links/StackOverflow';
import { FooterBaseLink } from './FooterBaseLink';

const Footer: FC = () => {
  const { context, stackoverflow } = useStore();
  return (
    <footer className="footer mob-right-pad">
      <section className="footer__links">
        <GitHubLink url={context?.github_href || ''} cssClass="footer__link" />
        <StackOverflow
          url={stackoverflow?.link || ''}
          cssClass="footer__link"
        />
        <LinkedIn url={context?.linkedin_href || ''} cssClass="footer__link" />
      </section>
      <p className="footer__desc">
        The site is based with
        <FooterBaseLink link="https://nextjs.org/" name="Next.js" />, managed
        with
        <FooterBaseLink link="https://www.sanity.io/" name="Sanity.io" />
        and is hosted on the
        <FooterBaseLink link="https://vercel.com/" name="Vercel" />
      </p>
    </footer>
  );
};

export default Footer;
