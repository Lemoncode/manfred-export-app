import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Footer, Header, Navbar } from '@/common-app/components';
import * as classes from './home.styles';
import { switchRoutes, useUserChoiceContext } from '@/core';

interface Props {
  onSetManfredJson?: (text: string) => void;
}

export const Home: React.FunctionComponent<Props> = (props: Props) => {
  const { onSetManfredJson } = props;

  const { userChoice, setUserChoice } = useUserChoiceContext();

  const navigate = useNavigate();

  const [text, setText] = React.useState<string>('');

  // const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setText(event.target.value);
  // };

  const handleExport = () => {
    setUserChoice({ ...userChoice, manfredJsonContent: text });
    navigate(switchRoutes.templateExportScene);
    // if (text.trim().length !== 0) {
    //   onSetManfredJson(text);
    // } else {
    //   alert('No content');
    // }
  };

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
          <Button className={classes.buttonClass} onClick={handleExport}>
            EXPORTAR CV
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
