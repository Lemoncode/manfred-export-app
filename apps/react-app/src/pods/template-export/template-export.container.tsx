import React from 'react';
import { exportManfredJSonToWordAndDownload, parseStringToManfredJSon } from '@lemoncode/manfred2word';
import { exportManfredJSonToMarkdown } from '@lemoncode/manfred2md';
import { exportHTMLTemplate } from '@lemoncode/manfred2html';
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

      await download(blob, 'CV.md');
    } catch (error) {
      console.error(error);
      alert('Hay un error, no está utilizando el formato correcto');
    }
  };

  const onExportJsonToHTML = async (text: string) => {
    try {
      const manfredJsonContent = parseManfredJson(text);
      const content = exportHTMLTemplate(manfredJsonContent);
      const blob = new Blob([content], { type: 'text/html' });

      await download(blob, 'manfred.html');
    } catch (error) {
      console.error(error);
      alert('Hay un error, no está utilizando el formato correcto');
    }
  };

  return (
    <TemplateExport
      onExportToWord={onExportJsonToWord}
      onExportToMarkdown={onExportJsonToMarkdown}
      onExportToHTML={onExportJsonToHTML}
    />
  );
};
