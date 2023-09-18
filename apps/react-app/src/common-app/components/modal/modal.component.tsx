import React from 'react';
import * as classes from './modal.styles';
import { Button } from '../button';
import { SelectButton, ColorOptions } from './selectButton';


interface Props {
  children: React.ReactNode;
}

export const Modal: React.FC<Props> = (props) => {
  const { children } = props;


  return (
    <div className={classes.container}>
      {children}
    </div>
  );
};
