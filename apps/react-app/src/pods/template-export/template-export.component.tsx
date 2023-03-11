import React from 'react';

import { MacContext } from '@/providers/mac.context';

export const TemplateExport: React.FC = () => {

  const {macData} = React.useContext(MacContext);
  console.log("datos del contexto", macData);

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
