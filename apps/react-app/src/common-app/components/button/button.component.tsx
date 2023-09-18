import React from 'react';
import { cx } from '@emotion/css';
import * as classes from './button.styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  children?: React.ReactNode;
  showIcon?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<Props> = props => {
  const { showIcon = true, disabled, className, children, onClick } = props;
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cx(classes.buttonStyle, { [classes.disabledStyles]: disabled }, className)}
    >
      {children}
      {showIcon && <img src="./assets/arrow_button_1.svg" alt="arrow" />}
    </button>
  );
};
