import { UserChoiceContext } from '@/providers/user-choice.context';
import React from 'react';

interface Props {
  onSetManfredJson: (text: string) => void;
}

export const ManfredJsonInput: React.FunctionComponent<Props> = (props: Props) => {

  const {onSetManfredJson} = props;
  const {userChoice, setUserChoice} = React.useContext(UserChoiceContext);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserChoice(event.target.value);
  };

  const handleExport = () => {

    if (userChoice.trim().length !== 0) {
      alert('here will go the export to word');
      onSetManfredJson(userChoice);
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
