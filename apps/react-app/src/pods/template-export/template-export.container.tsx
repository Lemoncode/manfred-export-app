import React from 'react';
import { TemplateExport } from './template-export.component';
import { mockedManfredJsonProfile } from './mock';
import { exportManfredJSonToWordAndDownload } from '@lemoncode/manfred2word';
import { DEFAULT_EXPORT_FILENAME } from '@/core';

export const TemplateExportContainer: React.FC = () => {
  const [manfredJSON, setManfredJSON] = React.useState('');
  const [filename, setFilename] = React.useState('');

  React.useEffect(() => {
    setManfredJSON(mockedManfredJsonProfile);
  }, []);

  const handleExport = async () => {
    exportManfredJSonToWordAndDownload(DEFAULT_EXPORT_FILENAME);
  };

  return <TemplateExport onExport={handleExport} />;
};
