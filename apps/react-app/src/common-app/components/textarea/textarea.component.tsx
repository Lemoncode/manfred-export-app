import React from 'react';
import { cx } from '@emotion/css';
import * as classes from './textarea.styles';

interface Props {
  className?: string;
}

export const Textarea: React.FC<Props> = props => {
  const { className } = props;

  return (
    <textarea placeholder="Pega aquí tu JSON en formato MAC" className={cx(classes.textarea, className)}></textarea>
  );
};
