import { FC } from 'react';
// Components
import { LinkArrow } from './LinkArrow';
import { LinkName } from './LinkName';
import { Logo } from './Logo';
import { SwitchLang } from './SwitchLang';
import { SwitchTheme } from './SwitchTheme';
// Context
import { useStore } from '@Store';
// Style
import style from './navigation.module.css';
const Navigation: FC = () => {
  const { context } = useStore();
  console.log('navigation', context);

  return (
    <nav className={style.nav}>
      <Logo />
      <ul>
        <LinkName />
      </ul>
      <LinkArrow />
      <SwitchLang />
      <SwitchTheme />
    </nav>
  );
};

export default Navigation;
