import { useState } from 'react';
// Components
import { LinkName } from '@Navigation/link-name/LinkName';
import { Logo } from '@Navigation/logo/Logo';
import { SwitchLang } from '@Navigation/switch-lang/SwitchLang';
import { SwitchTheme } from '@Navigation/switch-theme/SwitchTheme';
// Helpers
import { animationOptimization } from '@Helpers/functions';
// Localization
import { navigationLinks } from '@Helpers/localization';

const Navigation = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = (isOpen: boolean) => {
    return () => {
      setMenu(isOpen);
      animationOptimization(1000);
    };
  };

  const links = navigationLinks.map(link => {
    return (
      <LinkName key={`id_${link.anchor}`} link={link} handler={openMenu} />
    );
  });

  return (
    <header className="header mob-right-pad" aria-label="navigation panel">
      <Logo />
      <nav className="nav" aria-label="desktop navigation">
        {links}
      </nav>
      <nav
        className={menu ? 'mob-nav open' : 'mob-nav'}
        aria-label="mobile navigation"
      >
        {links}
        <button
          className="mob-nav__close-btn"
          aria-label="close mobile menu button"
          onClick={openMenu(false)}
        ></button>
        <svg className="mob-nav__bg">
          <circle className="mob-nav__1-circle" />
          <circle className="mob-nav__2-circle" />
        </svg>
      </nav>
      <button
        className="mob-menu-btn"
        aria-label="mobile menu navigation button"
        onClick={openMenu(true)}
      >
        <span className="mob-menu-btn__icon"></span>
      </button>
      <SwitchLang />
      <SwitchTheme />
    </header>
  );
};

export default Navigation;
