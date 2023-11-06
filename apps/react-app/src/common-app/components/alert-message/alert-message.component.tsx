import React from 'react';
import { Button } from '@/common-app/components';
import * as classes from './alert-message.styles';

interface AlertMessageProps {
  onClick: () => void;
}

export const AlertMessage: React.FC<AlertMessageProps> = ({ onClick }) => {
  return (
    <div className={classes.root}>
      <div className={classes.header}></div>
      <div className={classes.content}>
        <picture>
          <img className={classes.backgroundImage} src="./assets/alert-message-image.svg" alt="Background Image" />
        </picture>
        <div className={classes.mainContent}>
          <div className={classes.textContainer}>
            <div className={classes.textHeader}>Oop!</div>
            <div className={classes.title}>PROBLEMA DETECTADO</div>
            <div className={classes.description}>
              Revisa el formato del json que has introducido, es posible que algo no esté bien.
            </div>
          </div>
          <Button className={classes.closeButton} showIcon={false} onClick={onClick}>
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  );
};
