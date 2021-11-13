import { MouseEvent, useState } from 'react';
// Components
// import { LinkArrow } from './link-arrow/LinkArrow';
import { LinkName } from './link-name/LinkName';
import { Logo } from './logo/Logo';
import { SwitchLang } from './switch-lang/SwitchLang';
import { SwitchTheme } from './switch-theme/SwitchTheme';
// Context
import { useStore } from '@Store';
// Style
// import style from './navigation.module.css';
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
        console.log(el.id);
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
    <header className="nav" aria-label="navigation panel">
      <Logo />
      <nav
        className="nav-links"
        onClick={selectButton}
        aria-label="desktop navigation"
      >
        {links}
        {/* <LinkArrow /> */}
      </nav>
      <nav
        className={menu ? 'mob-nav-links open' : 'mob-nav-links'}
        onClick={selectButton}
        aria-label="mobile navigation"
      >
        <SwitchLang />
        {links}
        <button
          id="mob-nav-close"
          aria-label="close mobile menu button"
          onClick={openMenu}
        ></button>
        <svg id="nav-background">
          <circle />
          <circle />
        </svg>
      </nav>
      <SwitchLang />
      <button
        id="mob-nav-btn"
        aria-label="mobile menu navigation button"
        onClick={openMenu}
      >
        <span id="mob-nav-icon"></span>
      </button>
      <SwitchTheme />
    </header>
  );
};

export default Navigation;
