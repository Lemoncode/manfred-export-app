import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { switchRoutes } from '@/core';
import { Button, Footer, Header, Navbar } from '@/common-app/components';
import * as classes from './home.styles';

export const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const navigateToExport = () => navigate(switchRoutes.templateExportScene);

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.container}>
        <div className={classes.message}>
          Este es un proyecto Open Source realizado por los alumnos del
          <span>Máster Front End Lemoncode</span>
        </div>
        <Header />
        <div className={classes.grid}>
          <div className={classes.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum iste ipsam fugiat delectus rerum vero
            officiis, <Link to={'#'}> sunt esse modi similique nesciunt</Link>, ut doloremque architecto! Minima
            quisquam consequuntur rerum aliquid consectetur.
          </div>
          <div className={classes.videoContainer}>
            <div className={classes.videoContent}>
              <video id="myVideo" controls loop>
                <source src="./assets/big_buck_bunny_webm.webm" type="video/webm" />
              </video>
              <span className={classes.span1}>Cómo extraer tu perfil de manfred a formato JSON</span>
            </div>
          </div>
          <Button className={classes.buttonClass} onClick={navigateToExport}>
            EXPORTAR CV
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
