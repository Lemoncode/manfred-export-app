import React from 'react';
import * as classes from './modal.styles';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
}

export const Modal: React.FC<Props> = (props) => {
  const { children, isOpen } = props;
  
  return isOpen && <div className={classes.container}>{children}</div>
};
