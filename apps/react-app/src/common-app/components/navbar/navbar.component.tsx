import React from 'react';
import { cx } from '@emotion/css';
import { Menu } from '../menu';
import * as classes from './navbar.styles';

export const Navbar: React.FC = () => {
  const [hiddeMenu, setHiddeMenu] = React.useState(true);

  const handleShowMenu = () => setHiddeMenu(current => !current);

  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleHiddenMenuClose = (event: any) => {
    if (
      event?.target?.className !== classes.iconMenu &&
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setHiddeMenu(true);
    }
  };

  return (
    <nav onClick={handleHiddenMenuClose} className={classes.nav}>
      <div className={classes.logo}></div>
      <img className={classes.labelIcon} src="/assets/beta-icon.svg" alt="icono" />
      <img onClick={handleShowMenu} className={classes.iconMenu} src="/assets/lines-vector.svg" alt="menú" />
      <Menu containerRef={containerRef} className={cx({ [classes.hidde]: hiddeMenu })} />
    </nav>
  );
};
