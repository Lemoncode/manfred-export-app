import React from 'react';
import { cx } from '@emotion/css';
import * as classes from './mf-text-area.styles';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const MfTextArea: React.FC<Props> = props => {
  return <textarea className={cx(classes.textAreaStyle, props.className)} {...props} />;
};
