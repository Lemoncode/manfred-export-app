import React from 'react';
import { exportManfredJSonToWordAndDownload, parseStringToManfredJSon } from '@lemoncode/manfred2word';
import { exportManfredJSonToMarkdown } from '@lemoncode/manfred2md';
import { DEFAULT_EXPORT_FILENAME } from '@/core';
import { download } from '@/common';
import { TemplateExport } from './template-export.component';

export const TemplateExportContainer: React.FC = () => {
  const parseManfredJson = (text: string) => {
    JSON.parse(text);
    return parseStringToManfredJSon(text);
  };

  const onExportJsonToWord = async (text: string) => {
    try {
      const manfredJsonContent = parseStringToManfredJSon(text);
      await exportManfredJSonToWordAndDownload(DEFAULT_EXPORT_FILENAME, manfredJsonContent);
    } catch (error) {
      alert('Hay un error, no está utilizando el formato correcto');
      console.error(error);
    }
  };

  const onExportJsonToMarkdown = async (text: string) => {
    try {
      const manfredJsonContent = parseManfredJson(text);
      const content = exportManfredJSonToMarkdown(manfredJsonContent);
      const blob = new Blob([content], { type: 'text/markdown' });

      await download(blob, 'manfred.md');
    } catch (error) {
      console.error(error);
      alert('Hay un error, no está utilizando el formato correcto');
    }
  };

  const onExportJsonToHTML = async (text: string) => {
    // TODO: Aquí como en el MD para el download
    console.log('Export to HTML !!');
  };

  return (
    <TemplateExport
      onExportToWord={onExportJsonToWord}
      onExportToMarkdown={onExportJsonToMarkdown}
      onExportToHTML={onExportJsonToHTML}
    />
  );
};
