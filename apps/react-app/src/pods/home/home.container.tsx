import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Home } from './home.component';
import { switchRoutes, UserChoiceContext, useUserChoiceContext } from '@/core';

export const HomeContainer: React.FC = () => {
  const { userChoice, setUserChoice } = useUserChoiceContext();

  const navigate = useNavigate();

  const handleData = (text: string) => {
    setUserChoice({ ...userChoice, manfredJsonContent: text });
    navigate(switchRoutes.templateExportScene);
  };

  return <Home onSetManfredJson={handleData} />;
};
