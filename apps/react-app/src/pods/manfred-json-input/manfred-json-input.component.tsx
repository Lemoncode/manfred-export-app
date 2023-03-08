import React from 'react';
import {useState} from 'react';

interface Props {
  handleData: (text: string) => void;
}

export const ManfredJsonInput: React.FunctionComponent<Props> = (props: Props) => {

  const {handleData} = props;

  const [text, setText] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setText(event.target.value);
  };

  const handleExport = () => {

    if (text.trim().length !== 0) {
      alert('here will go the export to word');
      handleData(text);
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
