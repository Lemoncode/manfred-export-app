import React, { ReactElement } from 'react';
import { cx } from '@emotion/css';
import * as classes from './button.styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  showIcon?: boolean;
  className?: string;
}

export const Button: React.FC<Props> = props => {
  const { showIcon = true, className, children } = props;
  return (
    <button {...props} className={cx(classes.buttonStyle, className)}>
      {children}
      {showIcon && <img src="./assets/arrow_button_1.svg" alt="" />}
    </button>
  );
};
