import React from 'react';
import { exportManfredJSonToWordAndDownload, parseStringToManfredJSon } from '@lemoncode/manfred2word';
import { DEFAULT_EXPORT_FILENAME } from '@/core';
import { TemplateExport } from './template-export.component';
import { onExportJsonToMarkdown } from '@/common-app/helpers';

export const TemplateExportContainer: React.FC = () => {
  const onSetManfredJson = async (text: string) => {
    try {
      const manfredJsonContent = parseStringToManfredJSon(text);

      await exportManfredJSonToWordAndDownload(DEFAULT_EXPORT_FILENAME, manfredJsonContent);

      const markdownContent: string = `# Title \n ## subtitle\n- list-item ${JSON.stringify(manfredJsonContent)}`;
      const blob = new Blob([markdownContent], { type: 'text/markdown' });

      await new Promise<void>(resolve => {
        onExportJsonToMarkdown(blob, 'manfred.md');
        resolve();
      });
    } catch (error) {
      alert('Hay un error, no está utilizando el formato correcto');
    }
  };

  return <TemplateExport onExport={onSetManfredJson} />;
};
