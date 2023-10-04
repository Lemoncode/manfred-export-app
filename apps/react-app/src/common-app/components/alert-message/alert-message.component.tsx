import React from 'react';
import * as classes from './alert-message.styles';

import { Button } from '../index';

interface AlertMessageProps {
  onClick: () => void;
}

export const AlertMessage: React.FC<AlertMessageProps> = ({ onClick }) => {
  return (
    <div className={classes.alertStyle}>
      <div className="modal-header"></div>
      <div className="modal-content">
        <picture>
          <img src="./assets/alert-message-image.svg" alt="Background Image" />
        </picture>
        <div className="modal-main">
          <div className="modal-text">
            <div className="modal-text--h1">Oop!</div>
            <div className="modal-text--h2">PROBLEMA DETECTADO</div>
            <div className="modal-text--p">
              Revisa el formato del json que has introducido, es posible que algo no esté bien.
            </div>
          </div>
          <div className="modal-button">
            <Button showIcon={false} onClick={onClick}>
              Aceptar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
