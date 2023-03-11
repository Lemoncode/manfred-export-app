import { MacContext } from '@/providers/mac.context';
import React from 'react';

interface Props {
  onSetManfredJson: (text: string) => void;
}

export const ManfredJsonInput: React.FunctionComponent<Props> = (props: Props) => {

  const {onSetManfredJson} = props;
  const {macData, setMacData} = React.useContext(MacContext);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMacData(event.target.value);
  };

  const handleExport = () => {

    if (macData.trim().length !== 0) {
      alert('here will go the export to word');
      onSetManfredJson(macData);
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
