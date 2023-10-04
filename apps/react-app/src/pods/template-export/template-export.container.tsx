import React from 'react';
import { exportManfredJSonToWordAndDownload, parseStringToManfredJSon } from '@lemoncode/manfred2word';
import { exportManfredJSonToMarkdown } from '@lemoncode/manfred2md';
import { exportManfredJSonToHTML, ExportHTMLSettings } from '@lemoncode/manfred2html';
import { DEFAULT_EXPORT_FILENAME } from '@/core';
import { download } from '@/common';
import { TemplateExport } from './template-export.component';

export const TemplateExportContainer: React.FC = () => {
  const parseManfredJson = (text: string) => {
    JSON.parse(text);
    return parseStringToManfredJSon(text);
  };

  const [error, setError] = React.useState(false);

  const onExportJsonToWord = async (text: string) => {
    try {
      const manfredJsonContent = parseStringToManfredJSon(text);
      await exportManfredJSonToWordAndDownload(DEFAULT_EXPORT_FILENAME, manfredJsonContent);
    } catch (error) {
      // alert('Hay un error, no está utilizando el formato correcto');
      console.error(error);
      setError(true);
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
      setError(true);
      // alert('Hay un error, no está utilizando el formato correcto');
    }
  };

  const onHTMLSettingChanged = (text: string, exportHTMLSettings: ExportHTMLSettings): string => {
    try {
      const manfredJsonContent = parseManfredJson(text);
      const content = exportManfredJSonToHTML(manfredJsonContent, exportHTMLSettings);
      return content || '';
    } catch (error) {
      console.error(error);
      setError(true);
      // alert('Hay un error, no está utilizando el formato correcto');
      return '';
    }
  };

  const onExportToHTML = async (text: string, exportHTMLSettings: ExportHTMLSettings) => {
    try {
      const manfredJsonContent = parseManfredJson(text);
      const content = exportManfredJSonToHTML(manfredJsonContent, exportHTMLSettings);
      const blob = new Blob([content], { type: 'text/html' });

      await download(blob, 'manfred.html');
    } catch (error) {
      console.error(error);
      setError(true);
      // alert('Hay un error, no está utilizando el formato correcto');
    }
  };
  return (
    <TemplateExport
      error={error}
      onExportToWord={onExportJsonToWord}
      onExportToMarkdown={onExportJsonToMarkdown}
      onExportToHTML={onExportToHTML}
      onHTMLSettingSelectionChanged={onHTMLSettingChanged}
    />
  );
};
