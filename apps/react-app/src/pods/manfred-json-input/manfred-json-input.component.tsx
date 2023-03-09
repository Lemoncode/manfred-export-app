import { ButtonComponent } from '@/common/forms/mf-button-component';
import { TextAreaComponent } from '@/common/forms/mf-text-area.component';
import React from 'react';
import { useState } from 'react';

export const ManfredJsonInput: React.FC = () => {
  const [text, setText] = useState('');

  const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setText(event.target.value);
  };

  const handleExport = () => {
    if (text.trim().length !== 0) {
      alert('here will go the export to word');
    } else {
      alert('No content');
    }
  };

  return (
    <>
      <h1>Hello from ManfredJsonInputComponent</h1>
      <form>
        <label>Paste here your JSON in MAC Format</label>
        <textarea
          id="textInput"
          name="textInput"
          rows={20}
          cols={50}
          onChange={event => handleChange(event)}
          autoComplete="off"
        ></textarea>
      </form>
      <button onClick={handleExport}>Export your CV</button>
    </>
  );
};
