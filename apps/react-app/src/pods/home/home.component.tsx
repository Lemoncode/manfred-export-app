import React from 'react';
import { MfButton, MfTextArea } from '@/common/forms';
import { Footer } from '@/common-app/components';
import * as classes from './home.styles';

interface Props {
  onSetManfredJson: (text: string) => void;
}

export const Home: React.FunctionComponent<Props> = (props: Props) => {
  const { onSetManfredJson } = props;

  const [text, setText] = React.useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

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
        <div className={classes.headerContainer}>
          <h1 className={classes.header}>
            Exporta tu perfil <span className={classes.span1}>JSON</span> de <br />{' '}
            <span className={classes.span2}>Manfred a Word</span>
          </h1>
        </div>
        <div className={classes.divForm}>
          <div className={classes.divText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum iste ipsam fugiat delectus rerum vero
            officiis, sunt esse modi similique nesciunt, ut doloremque architecto! Minima quisquam consequuntur rerum
            aliquid consectetur.
          </div>

          <form className={classes.form}>
            <MfTextArea
              id="textInput"
              name="textInput"
              rows={20}
              cols={50}
              onChange={event => handleChange(event)}
              autoComplete="off"
            ></MfTextArea>
          </form>
          <MfButton onClick={handleExport}>Export your CV</MfButton>
        </div>
      </div>
      <Footer />
    </div>
  );
};
