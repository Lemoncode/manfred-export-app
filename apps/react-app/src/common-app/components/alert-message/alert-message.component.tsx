import React from 'react';
import * as classes from './alert-message.styles';

import { Button } from '@/common-app/components';

interface AlertMessageProps {
  onClick: () => void;
}

export const AlertMessage: React.FC<AlertMessageProps> = ({ onClick }) => {
  return (
    <div className={classes.alertStyle}>
      <div className={classes.modalHeader}></div>
      <div className={classes.modalContent}>
        <picture>
          <img className={classes.modalImage} src="./assets/alert-message-image.svg" alt="Background Image" />
        </picture>
        <div className={classes.modalMain}>
          <div className={classes.modalText}>
            <div className={classes.modalTextH1}>Oop!</div>
            <div className={classes.modalTextH2}>PROBLEMA DETECTADO</div>
            <div className={classes.modalTextP}>
              Revisa el formato del json que has introducido, es posible que algo no esté bien.
            </div>
          </div>
          <div className={classes.modalButton}>
            <Button showIcon={false} onClick={onClick}>
              Aceptar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
