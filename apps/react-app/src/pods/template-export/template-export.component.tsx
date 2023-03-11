import React from 'react';

export const TemplateExport: React.FC = () => {

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
