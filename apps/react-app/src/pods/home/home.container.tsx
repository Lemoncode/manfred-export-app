import React from 'react';
import { useNavigate } from 'react-router-dom';
import { switchRoutes, UserChoiceContext, useUserChoiceContext } from '@/core';
import { Home } from './home.component';

export const HomeContainer: React.FC = () => {
  // const { userChoice, setUserChoice } = useUserChoiceContext();

  // const navigate = useNavigate();

  // const handleData = (text: string) => {
  //   setUserChoice({ ...userChoice, manfredJsonContent: text });
  //   navigate(switchRoutes.templateExportScene);
  // };

  return (
    <Home
    // onSetManfredJson={handleData}
    />
  );
};
