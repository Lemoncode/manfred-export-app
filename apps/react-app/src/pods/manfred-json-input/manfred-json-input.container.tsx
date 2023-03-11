import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ManfredJsonInput } from './manfred-json-input.component';
import { switchRoutes, UserChoiceContext } from '@/core';

export const ManfredJsonInputContainer: React.FC = () => {

  const {setUserChoice} = React.useContext(UserChoiceContext);

  const navigate = useNavigate();

  const handleData = (text:string) => {
    console.log("text", text);
    setUserChoice({manfredJsonContent: text});
    navigate(switchRoutes.templateExportScene);
  }

  return <ManfredJsonInput onSetManfredJson={handleData} />;
};
