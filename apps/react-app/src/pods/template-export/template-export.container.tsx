import React from 'react';
import { TemplateExport } from './template-export.component';
import { mockedManfredJsonProfile } from './mock';
import { exportManfredJSonToWordAndDownload } from '@lemoncode/manfred2word';

export const TemplateExportContainer: React.FC = () => {
  const [manfredJSON, setManfredJSON] = React.useState('');
  const [filename, setFilename] = React.useState('');

  React.useEffect(() => {
    setManfredJSON(mockedManfredJsonProfile);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (filename !== '') {
      exportManfredJSonToWordAndDownload(filename);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilename(e.target.value);
  };

  return <TemplateExport onSubmit={handleSubmit} onChange={handleChange} />;
};
