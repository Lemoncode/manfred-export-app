import React from 'react';
import { cx } from '@emotion/css';
import * as classes from './button.styles';

interface Props {
  children?: React.ReactNode;
  showIcon?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = props => {
  const { showIcon = true, className, children, onClick } = props;
  return (
    <button onClick={onClick} className={cx(classes.buttonStyle, className)}>
      {children}
      {showIcon && <img src="./assets/arrow_button_1.svg" alt="arrow" />}
    </button>
  );
};
