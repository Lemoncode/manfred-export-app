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
      <div className={classes.footerContent}>
        <span> Copyright © 2023</span>
        <br />
        Creado por los alumnos del &nbsp;
        <Link to={'https://lemoncode.net/master-frontend#inicio-banner'}>
          <span className={classes.spanLink}>Máster FrontEnd Lemoncode</span>
        </Link>
      </div>
    </footer>
  );
};
