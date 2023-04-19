import React from 'react';
import { MfButton, MfTextArea } from '@/common/forms';
import { Footer, Header } from '@/common-app/components';
import * as classes from './home.styles';

interface Props {
  onSetManfredJson: (text: string) => void;
}

export const Home: React.FunctionComponent<Props> = (props: Props) => {
  const { onSetManfredJson } = props;

  const [text, setText] = React.useState<string>('');

  // const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setText(event.target.value);
  // };

  const handleExport = () => {
    if (text.trim().length !== 0) {
      onSetManfredJson(text);
    } else {
      alert('No content');
    }
  };

  return (
    <div className={classes.root}>
      <nav className={classes.nav}>Nav</nav>
      <div className={classes.container}>
        <div className={classes.message}>
          <p>Este es un proyecto Open Source(en Beta) realizado por los alumnos del</p>

          <span>Máster Front End Lemoncode</span>
        </div>
        <Header />
        <div className={classes.divText}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum iste ipsam fugiat delectus rerum vero
          officiis, sunt esse modi similique nesciunt, ut doloremque architecto! Minima quisquam consequuntur rerum
          aliquid consectetur.
        </div>
        <div className={classes.videoContainer}>
          <div className={classes.videoContent}>
            <video id="myVideo" controls loop>
              <source src="./assets/big_buck_bunny_mp4.mp4" type="video/mp4" />
            </video>
            <span className={classes.span1}>Cómo extraer tu perfil de manfred a formato JSON</span>
          </div>
          <MfButton onClick={handleExport}>Export your CV</MfButton>
        </div>
      </div>
      <Footer />
    </div>
  );
};
