import React from 'react';
import * as classes from './menu.styles';

export const Menu: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div>
          <span className={classes.span}>
            <img src="/assets/Vector-home.svg" alt="inicio" />
            <div>Inicio</div>
          </span>
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
    </div>
  );
};
