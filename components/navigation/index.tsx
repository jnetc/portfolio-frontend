import { MouseEvent, useState } from 'react';
// Components
import { LinkName } from '@Navigation/link-name/LinkName';
import { Logo } from '@Navigation/logo/Logo';
import { SwitchLang } from '@Navigation/switch-lang/SwitchLang';
import { SwitchTheme } from '@Navigation/switch-theme/SwitchTheme';
// Context
import { useStore } from '@Store';
// Helpers
import { animationOptimization } from '@Helpers/functions';

const anchors = [
  {
    anchor: '#home',
    en: 'Home',
    ru: 'Начальная',
  },
  {
    anchor: '#portfolio',
    en: 'Portfolio',
    ru: 'Портфолио',
  },
  {
    anchor: '#skills',
    en: 'Skills',
    ru: 'Навыки',
  },
  {
    anchor: '#about',
    en: 'About me',
    ru: 'Обо мне',
  },
];

const Navigation = () => {
  const { lang } = useStore();
  const [activeLink, setActiveLink] = useState(anchors[0].anchor);
  const [menu, setMenu] = useState(false);

  const selectButton = (ev: MouseEvent<HTMLUListElement>) => {
    const el = ev.target as HTMLAnchorElement;
    anchors.forEach(a => {
      if (a.anchor === el.id) {
        setActiveLink(el.id);
      }
    });
  };

  const openMenu = () => {
    setMenu(!menu);
    animationOptimization(1000);
  };

  const links = anchors.map(link => {
    return (
      <LinkName
        key={link.anchor}
        link={link}
        lang={lang}
        activeLink={activeLink}
      />
    );
  });

  return (
    <header className="header mob-right-pad" aria-label="navigation panel">
      <Logo />
      <nav
        className="nav"
        onClick={selectButton}
        aria-label="desktop navigation"
      >
        {links}
      </nav>
      <nav
        className={menu ? 'mob-nav open' : 'mob-nav'}
        onClick={selectButton}
        aria-label="mobile navigation"
      >
        <SwitchLang />
        {links}
        <button
          className="mob-nav__close-btn"
          aria-label="close mobile menu button"
          onClick={openMenu}
        ></button>
        <svg className="mob-nav__bg">
          <circle className="mob-nav__1-circle" />
          <circle className="mob-nav__2-circle" />
        </svg>
      </nav>
      <SwitchLang />
      <button
        className="mob-menu-btn"
        aria-label="mobile menu navigation button"
        onClick={openMenu}
      >
        <span className="mob-menu-btn__icon"></span>
      </button>
      <SwitchTheme />
    </header>
  );
};

export default Navigation;
