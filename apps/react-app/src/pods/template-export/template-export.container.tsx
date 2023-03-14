import React from 'react';
import { UserChoiceContext } from '@/core/user-choice/user-choice.context';
import { TemplateExport } from './template-export.component';
import { mockedManfredJsonProfile as mockedManfredJsonProfileStringFormat } from './mock';
import { exportManfredJSonToWordAndDownload, parseStringToManfredJSon } from '@lemoncode/manfred2word';
import { DEFAULT_EXPORT_FILENAME } from '@/core';
import { useUserChoiceContext } from '@/core/user-choice';

export const TemplateExportContainer: React.FC = () => {
  const { userChoice } = useUserChoiceContext();
  console.log('datos del contexto', userChoice);

  const [text, setText] = React.useState('');

  React.useEffect(() => {
    setText(mockedManfredJsonProfileStringFormat);
  }, []);

  const handleExport = async () => {
    const manfredJsonContent = parseStringToManfredJSon(text);
    exportManfredJSonToWordAndDownload(DEFAULT_EXPORT_FILENAME, manfredJsonContent);
  };

  return <TemplateExport onExport={handleExport} />;
};
