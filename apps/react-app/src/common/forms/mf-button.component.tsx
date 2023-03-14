import React from 'react';
import { cx } from '@emotion/css';
import * as classes from './mf-button.styles';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const MfButton: React.FC<Props> = props => {
  return <button className={cx(classes.buttonStyle, props.className)} {...props} />;
};
