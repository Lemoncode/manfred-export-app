import React from 'react';
import { Footer, Navbar, Card } from '@/common-app/components';
import { userList } from './data-json';
import * as classes from './about-us.styles';

export const AboutUs: React.FC = () => {
  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.title}>Sobre nosotros</div>
        <div className={classes.cardContainer}>
          {userList.map((user, i) => (
            <Card key={i} {...user} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
