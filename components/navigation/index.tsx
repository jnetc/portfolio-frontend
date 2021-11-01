import { FC } from 'react';
// Components
import { LinkArrow } from './LinkArrow';
import { LinkName } from './LinkName';
import { Logo } from './Logo';
import { SwitchLang } from './SwitchLang';
import { SwitchTheme } from './SwitchTheme';

const Navigation: FC = () => {
  return (
    <nav>
      <Logo />
      <ul>
        <LinkName />
      </ul>
      <SwitchLang />
      <SwitchTheme />
    </nav>
  );
};

export default Navigation;
