import React from 'react';
import { Link } from 'react-router-dom';
import * as classes from './footer.styles';

export const Footer: React.FC = () => {
  return (
    <footer className={classes.root}>
      <span>Copyright © 2023</span>
      <span>
        Creado por los alumnos del &nbsp;
        <Link to={'https://lemoncode.net/master-frontend#inicio-banner'} className={classes.link}>
          Máster FrontEnd Lemoncode
        </Link>
      </span>
    </footer>
  );
};
