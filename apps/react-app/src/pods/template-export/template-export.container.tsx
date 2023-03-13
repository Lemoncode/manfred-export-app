import React from 'react';
import { UserChoiceContext } from '@/core/user-choice/user-choice.context';
import { TemplateExport } from './template-export.component';
import { useUserChoiceContext } from '@/core/user-choice';

export const TemplateExportContainer: React.FC = () => {
  const { userChoice } = useUserChoiceContext();
  console.log('datos del contexto', userChoice);

  return <TemplateExport />;
};
