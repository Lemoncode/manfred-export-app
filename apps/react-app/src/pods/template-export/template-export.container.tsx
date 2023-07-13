import React from 'react';
import { exportManfredJSonToWordAndDownload, parseStringToManfredJSon } from '@lemoncode/manfred2word';
import { DEFAULT_EXPORT_FILENAME } from '@/core';
import { TemplateExport } from './template-export.component';
import { exportManfredJSonToMarkdown } from '@lemoncode/manfred2md';

export const TemplateExportContainer: React.FC = () => {
  const parseManfredJson = (text: string) => {
    JSON.parse(text);
    return parseStringToManfredJSon(text);
  };

  const onExportJsonToWord = async (text: string) => {
    try {
      const manfredJsonContent = parseManfredJson(text);

      await exportManfredJSonToWordAndDownload(DEFAULT_EXPORT_FILENAME, manfredJsonContent);
    } catch (error) {
      alert('Hay un error, no está utilizando el formato correcto');
      console.error(error);
    }
  };

  const onExportJsonToMarkdown = (text: string) => {
    const manfredJsonContent = parseManfredJson(text);

    // TODO Flavio: Integrate Download
    console.log(exportManfredJSonToMarkdown(manfredJsonContent));
  };

  return <TemplateExport onExportToWord={onExportJsonToWord} onExportToMarkdown={onExportJsonToMarkdown} />;
};
