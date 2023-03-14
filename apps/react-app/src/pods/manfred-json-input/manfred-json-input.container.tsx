import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ManfredJsonInput } from './manfred-json-input.component';
import { switchRoutes, UserChoiceContext, useUserChoiceContext } from '@/core';

export const ManfredJsonInputContainer: React.FC = () => {
  const { userChoice, setUserChoice } = useUserChoiceContext();

  const navigate = useNavigate();

  const handleData = (text: string) => {
    console.log('text', text);
    setUserChoice({ ...userChoice, manfredJsonContent: text });
    navigate(switchRoutes.templateExportScene);
  };

  return <ManfredJsonInput onSetManfredJson={handleData} />;
};
