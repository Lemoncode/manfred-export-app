import React from 'react';
import { exportManfredJSonToWordAndDownload, parseStringToManfredJSon } from '@lemoncode/manfred2word/dev';
import { DEFAULT_EXPORT_FILENAME } from '@/core';
import { TemplateExport } from './template-export.component';
import { exportManfredJSonToMarkdown } from '@lemoncode/manfred2md';

export const TemplateExportContainer: React.FC = () => {
  const onSetManfredJson = async (text: string) => {
    try {
      JSON.parse(text);
      const manfredJsonContent = parseStringToManfredJSon(text);
      console.log(exportManfredJSonToMarkdown(manfredJsonContent));

      await exportManfredJSonToWordAndDownload(DEFAULT_EXPORT_FILENAME, manfredJsonContent);
    } catch (error) {
      alert('Hay un error, no está utilizando el formato correcto');
      console.error(error);
    }
  };

  return <TemplateExport onExport={onSetManfredJson} />;
};
