import React from 'react';
import { cx } from '@emotion/css';
import { Menu } from '../menu';
import * as classes from './navbar.styles';

export const Navbar: React.FC = () => {
  const [hiddeMenu, setHiddeMenu] = React.useState(true);

  const handleShowMenu = () => {
    setHiddeMenu(current => !current);
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.logo}></div>
      <img className={classes.labelIcon} src="/assets/beta-icon.svg" alt="icono" />
      <img onClick={handleShowMenu} className={classes.iconMenu} src="/assets/lines-vector.svg" alt="menú" />
      <Menu handleCloseMenu={handleShowMenu} className={cx({ [classes.hidde]: hiddeMenu })} />
    </nav>
  );
};
