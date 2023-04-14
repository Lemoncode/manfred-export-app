import { MfButton, MfTextArea } from '@/common/forms';
import React from 'react';
import * as classes from './manfred-json-input.styles';

interface Props {
  onSetManfredJson: (text: string) => void;
}

export const ManfredJsonInput: React.FunctionComponent<Props> = (props: Props) => {
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
    <>
      <nav className={classes.nav}>Nav</nav>
      <h1 className={classes.header}>
        Exporta tu perfil <span className="span1">JSON</span> de <span className="span2">Manfred a Word</span>
      </h1>
      <form>
        <label>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum iste ipsam fugiat delectus rerum vero
          officiis, sunt esse modi similique nesciunt, ut doloremque architecto! Minima quisquam consequuntur rerum
          aliquid consectetur.
        </label>
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
      <footer className={classes.footer}></footer>
    </>
  );
};
