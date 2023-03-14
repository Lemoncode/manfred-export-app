import { MfButton, MfTextArea } from '@/common/forms';
import React from 'react';

interface Props {
  onSetManfredJson: (text: string) => void;
}

export const ManfredJsonInput: React.FunctionComponent<Props> = (props: Props) => {
  const [text, setText] = React.useState<string>('');

  const { onSetManfredJson } = props;

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
      <h1>Hello from ManfredJsonInputComponent</h1>
      <form>
        <label>Paste here your JSON in MAC Format</label>
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
    </>
  );
};
