import React from 'react';

import { UserChoiceContext } from '@/providers/user-choice.context';

export const TemplateExport: React.FC = () => {

  const {userChoice} = React.useContext(UserChoiceContext);
  console.log("datos del contexto", userChoice);

  const handleExport = () => {
    console.log("Me exporto");
  }


  return (
  <>
  <h1>Hello for TemplateExportComponent</h1>
  <button onClick={handleExport}>Export</button>
  </>


  );
};
