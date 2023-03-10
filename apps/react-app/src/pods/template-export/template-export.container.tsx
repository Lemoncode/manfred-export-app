import React from 'react';
import { TemplateExport } from './template-export.component';
import { mockedManfredJsonProfile } from './mock';
import { exportManfredJSonToWord } from '@lemoncode/manfred2word';

export const TemplateExportContainer: React.FC = () => {
  const [manfredJSON, setManfredJSON] = React.useState('');

  React.useEffect(() => {
    setManfredJSON(mockedManfredJsonProfile);
  }, []);

  const handleExport = async () => {
    const buffer = await exportManfredJSonToWord(manfredJSON);
    console.log(buffer);
  };

  return <TemplateExport onExport={handleExport} />;
};
