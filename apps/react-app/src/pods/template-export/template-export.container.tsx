import React from 'react';
import { exportManfredJSonToWordAndDownload, parseStringToManfredJSon } from '@lemoncode/manfred2word';
import { DEFAULT_EXPORT_FILENAME } from '@/core';
import { TemplateExport } from './template-export.component';
import { onExportJsonToMarkdown } from '@/common-app/helpers';
import { Document, Packer } from 'docx';
import fs from 'fs';
//  import { Blob } from 'buffer';

export const TemplateExportContainer: React.FC = () => {
  const onSetManfredJson = async (text: string) => {
    try {
      JSON.parse(text);
      const manfredJsonContent = parseStringToManfredJSon(text);

      const x: any = await exportManfredJSonToWordAndDownload(DEFAULT_EXPORT_FILENAME, manfredJsonContent);

      const markdownContent = `# My JSON Data\n\n\`\`\`json\n${JSON.stringify(manfredJsonContent)}\n\`\`\``;
      const blob = new Blob([markdownContent], { type: 'text/markdown' });

      const y = await new Promise<void>(resolve => {
        onExportJsonToMarkdown(blob, 'archivo.md');
        resolve();
      });

      console.log('Archivo .md generado', y);
    } catch (error) {
      alert('Hay un error, no está utilizando el formato correcto');
    }
  };

  return <TemplateExport onExport={onSetManfredJson} />;
};
