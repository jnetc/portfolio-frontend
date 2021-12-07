import { FC } from 'react';
// Hook
import { useStore } from '@Store';
const Footer: FC = () => {
  const { context, stackoverflow } = useStore();
  return (
    <footer className="footer mob-right-pad">
      <a
        href={context?.github_href}
        className="footer__link"
        role="button"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        title={`go to ${context?.github_href.split('//')[1]} `}
      >
        GitHub
      </a>
      <a
        href={stackoverflow?.link}
        className="footer__link"
        role="button"
        target="_blank"
        rel="noreferrer"
        aria-label="StackOverflow"
        title={`go to ${stackoverflow?.link.split('//')[1]} `}
      >
        StackOverflow
      </a>
      <a
        href={context?.linkedin_href}
        className="footer__link"
        role="button"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        title={`go to ${context?.linkedin_href.split('//')[1]} `}
      >
        LinkedIn
      </a>
    </footer>
  );
};

export default Footer;
