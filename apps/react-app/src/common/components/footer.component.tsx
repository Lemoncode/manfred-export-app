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
      <img src="./assets/Footer_text.png" alt="footer" />
    </footer>
  );
};
