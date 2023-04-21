import React, { ReactElement } from 'react';
import { cx } from '@emotion/css';
import * as classes from './button.styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  toggle?: boolean;
  class?: string;
}

export const Button: React.FC<Props> = props => {
  return (
    <button className={cx(classes.buttonStyle, props.class)} {...props}>
      {props.children}
      &nbsp;
      {props.toggle && (
        <svg
          className={classes.icon}
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 0L11.59 1.41L16.17 6H0V8H16.17L11.58 12.59L13 14L20 7L13 0Z" fill="#1C5F63" />
        </svg>
      )}
    </button>
  );
};
