import { MfButton } from '@/common/forms';
import React from 'react';

interface Props {
  onExport: () => void;
}

export const TemplateExport: React.FC<Props> = props => {
  const { onExport } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onExport();
  };

  return (
    <>
      <h1>Hello for TemplateExportComponent</h1>
      <form onSubmit={handleSubmit}>
        <MfButton type="submit">Export</MfButton>
      </form>
    </>
  );
};
