import React from 'react';
import { TemplateExport } from './template-export.component';
import { mockedManfredJsonProfile } from './mock';
import { exportManfredJSonToWord } from '@lemoncode/manfred2word';

export const TemplateExportContainer: React.FC = () => {
  const [manfredJSON, setManfredJSON] = React.useState('');

  React.useEffect(() => {
    setManfredJSON(mockedManfredJsonProfile);
  }, []);

  const handleExport = () => {
    exportManfredJSonToWord(manfredJSON);
  };

  return <TemplateExport onExport={handleExport} />;
};
