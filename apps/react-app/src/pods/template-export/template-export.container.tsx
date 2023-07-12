import React from 'react';
import { exportManfredJSonToWordAndDownload, parseStringToManfredJSon } from '@lemoncode/manfred2word';
import { DEFAULT_EXPORT_FILENAME } from '@/core';
import { TemplateExport } from './template-export.component';
import { onExportJsonToMarkdown } from '@/common-app/helpers';

export const TemplateExportContainer: React.FC = () => {
  const onSetManfredJson = async (text: string) => {
    try {
      JSON.parse(text);
      const manfredJsonContent = parseStringToManfredJSon(text);

      const x: any = await exportManfredJSonToWordAndDownload(DEFAULT_EXPORT_FILENAME, manfredJsonContent);
      const blob = new Blob([x], { type: 'text/markdown' });
      onExportJsonToMarkdown(blob, 'archivo.md');
    } catch (error) {
      alert('Hay un error, no está utilizando el formato correcto');
    }
  };

  return <TemplateExport onExport={onSetManfredJson} />;
};
