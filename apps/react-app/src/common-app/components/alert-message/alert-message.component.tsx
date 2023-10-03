import React from 'react';
import * as classes from './alert-message.styles';

import { Button } from '../index';

interface AlertMessageProps {
  onClick: () => void;
}

export const AlertMessage: React.FC<AlertMessageProps> = ({ onClick }) => {
  return (
    <div className={classes.alertStyle}>
      <div className="header"></div>
      //div+classname
      <section>
        <aside>
          <img src="./assets/alert-message-image.svg" alt="Background Image" />
        </aside>
        <main>
          <div className="text-container">
            <div>Oop!</div>
            <div>PROBLEMA DETECTADO</div>
            <p>Revisa el formato del json que has introducido, es posible que algo no esté bien.</p>
            <Button showIcon={false} onClick={onClick}>
              Aceptar
            </Button>
          </div>
        </main>
      </section>
    </div>
  );
};
