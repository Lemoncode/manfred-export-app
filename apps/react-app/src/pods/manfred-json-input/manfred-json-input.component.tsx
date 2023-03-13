import React from 'react';

import { UserChoiceContext } from '@/core/user-choice';


interface Props {
  onSetManfredJson: (text: string) => void;
}

export const ManfredJsonInput: React.FunctionComponent<Props> = (props: Props) => {

  const [text, setText] = React.useState<string>("");

  const {onSetManfredJson} = props;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleExport = () => {

    if (text.trim().length !== 0) {
      onSetManfredJson(text);
    } else {
      alert('No content');
    }

  }

  return (
    <>
      <h1>Hello from ManfredJsonInputComponent</h1>
      <form>
        <label>Paste here your JSON in MAC Format
        <textarea id="textInput" name="textInput" rows={20} cols={50} onChange={(event)=>handleChange(event)} autoComplete="off"></textarea>
        </label>
      </form>


      <button onClick={handleExport}>Export your CV</button>
    </>
  )
};
