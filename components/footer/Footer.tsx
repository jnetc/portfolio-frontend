import { FC } from 'react';
// Hook
import { useContextStore } from '@Hooks/useContextStore';
// Component
import { GitHubLink } from '@Links/GitHub';
import { LinkedIn } from '@Links/LinkedIn';
import { StackOverflow } from '@Links/StackOverflow';
import { FooterBaseLink } from './FooterBaseLink';
// Style
import style from './footer.module.css';

const Footer: FC = () => {
  const { context, stackoverflow } = useContextStore();
  return (
    <footer className={`${style.block} mob-right-pad grid-12`}>
      <section className={style.links}>
        <GitHubLink url={context?.github_href || ''} cssClass="footer__link" />
        <StackOverflow
          url={stackoverflow?.link || ''}
          cssClass="footer__link"
        />
        <LinkedIn url={context?.linkedin_href || ''} cssClass="footer__link" />
      </section>
      <p className={style.desc}>
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
