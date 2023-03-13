import React from 'react';

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TemplateExport: React.FC<Props> = props => {
  const { onSubmit, onChange } = props;

  return (
    <>
      <h1>Hello for TemplateExportComponent</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <button type="submit">Export</button>
      </form>
    </>
  );
};
