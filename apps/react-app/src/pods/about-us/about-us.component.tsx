import React from 'react';
import { Footer, Navbar } from '@/common-app/components';
import * as classes from './about-us.styles';

export const AboutUs: React.FC = () => {
  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.title}>Sobre nosotros</div>
      </div>
      <Footer />
    </div>
  );
};
