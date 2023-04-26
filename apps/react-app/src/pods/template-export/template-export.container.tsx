import React from 'react';
import { exportManfredJSonToWordAndDownload, parseStringToManfredJSon } from '@lemoncode/manfred2word';
import { DEFAULT_EXPORT_FILENAME } from '@/core';
import { TemplateExport } from './template-export.component';

export const TemplateExportContainer: React.FC = () => {
  const onSetManfredJson = async (text: string) => {
    console.log('text1 container', text);

    try {
      JSON.parse(text);
      const manfredJsonContent = parseStringToManfredJSon(text);
      await exportManfredJSonToWordAndDownload(DEFAULT_EXPORT_FILENAME, manfredJsonContent);
    } catch (error) {
      alert('Hay un error, no está utilizando el formato correcto');
    }
  };

  return <TemplateExport onExport={onSetManfredJson} />;
};
