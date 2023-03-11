import React from 'react';
import { UserChoiceContext } from '@/core/user-choice/user-choice.context';
import { TemplateExport } from './template-export.component';

export const TemplateExportContainer: React.FC = () => {

  const {userChoice} = React.useContext(UserChoiceContext);
  console.log("datos del contexto", userChoice);

  return <TemplateExport />;
};
