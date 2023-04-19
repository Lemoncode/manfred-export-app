import React from 'react';
import * as classes from './header.styles';

export const Header: React.FC = () => {
  return (
    <h1 className={classes.header}>
      Exporta tu perfil <span className={classes.span1}>JSON</span> de <br />{' '}
      <span className={classes.span2}>Manfred a Word</span>
    </h1>
  );
};
