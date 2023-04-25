import React from 'react';
import { cx } from '@emotion/css';
import * as classes from './menu.styles';

interface Props {
  className?: string;
}

export const Menu: React.FC<Props> = ({ className }) => {
  return (
    <div className={cx(classes.container, className)}>
      <div className={classes.item}>
        <img src="/assets/Vector-home.svg" alt="inicio" />
        Inicio
      </div>

      <div>
        <span className={classes.span}>
          <img src="/assets/Vector-x-1.svg" alt="sobre nosotros" />
          <div>Sobre nosotros</div>
        </span>
      </div>
      <div>
        <span className={classes.span}>
          <img src="/assets/Vector-x-2.svg" alt="Lemoncode" />
          <div>Lemoncode</div>
        </span>
      </div>
      <div>
        <span className={classes.span}>
          <img src="/assets/Vector-x-3.svg" alt="contacto" />
          <div>Contacto</div>
        </span>
      </div>
      <div>
        <span className={classes.span}>
          <img src="/assets/Vector-x-4.svg" alt="compartir" />
          <div>Compartir</div>
        </span>
      </div>
    </div>
  );
};
