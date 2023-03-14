import React from 'react';
import { TemplateExport } from './template-export.component';
import { mockedManfredJsonProfile as mockedManfredJsonProfileStringFormat } from './mock';
import { exportManfredJSonToWordAndDownload, parseStringToManfredJSon } from '@lemoncode/manfred2word';
import { DEFAULT_EXPORT_FILENAME } from '@/core';

export const TemplateExportContainer: React.FC = () => {
  const [text, setText] = React.useState('');

  React.useEffect(() => {
    setText(mockedManfredJsonProfileStringFormat);
  }, []);

  const handleExport = async () => {
    // TODO: Issue here we need to properly escape \\\\n
    const escapedContent = text.replace(/\n/g, '');
    const prueba = JSON.parse(escapedContent);
    const manfredJsonContent = parseStringToManfredJSon(escapedContent);
    exportManfredJSonToWordAndDownload(DEFAULT_EXPORT_FILENAME, manfredJsonContent);
  };

  return <TemplateExport onExport={handleExport} />;
};
