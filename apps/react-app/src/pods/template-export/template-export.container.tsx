import React from 'react';
import { exportManfredJSonToWordAndDownload, parseStringToManfredJSon } from '@lemoncode/manfred2word';
import { DEFAULT_EXPORT_FILENAME, useUserChoiceContext } from '@/core';
import { TemplateExport } from './template-export.component';

export const TemplateExportContainer: React.FC = () => {
  const { userChoice } = useUserChoiceContext();

  const onSetManfredJson = async (text: string) => {
    const manfredJsonContent = parseStringToManfredJSon(userChoice.manfredJsonContent);
    await exportManfredJSonToWordAndDownload(DEFAULT_EXPORT_FILENAME, manfredJsonContent);
  };

  return <TemplateExport onExport={onSetManfredJson} />;
};
