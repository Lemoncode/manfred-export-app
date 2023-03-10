import React from 'react';

interface Props {
  onExport: () => void;
}

export const TemplateExport: React.FC<Props> = props => {
  const { onExport } = props;

  return (
    <>
      <h1>Hello for TemplateExportComponent</h1>
      <button onClick={onExport}>Export</button>
    </>
  );
};
