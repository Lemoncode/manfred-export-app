import React from 'react';
import { cx } from '@emotion/css';
import * as classes from './footer.styles';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = props => {
  const { className } = props;

  return (
    <footer className={cx(classes.footerContainer, className)}>
      {/* <img src="./assets/Footer_text.png" alt="footer" /> */}
      <div className={classes.divText}>
        Copyright © 2023
        <br />
        Creado por los alumnos del <span>Máster FrontEnd Lemoncode</span>
      </div>
    </footer>
  );
};
