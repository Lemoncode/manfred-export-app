import React from 'react';
import { cx } from '@emotion/css';
import * as classes from './footer.styles';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = props => {
  const { className } = props;

  return (
    <footer className={cx(classes.footerContainer, className)}>
      <h1>Footer</h1>
    </footer>
  );
};
