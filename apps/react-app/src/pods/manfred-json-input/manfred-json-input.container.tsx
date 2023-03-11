import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ManfredJsonInput } from './manfred-json-input.component';
import { switchRoutes } from '@/core';

export const ManfredJsonInputContainer: React.FC = () => {

  const navigate = useNavigate();

  const handleData = (text:string) => {
    navigate(switchRoutes.templateExportScene);
  }

  return <ManfredJsonInput onSetManfredJson={handleData} />;
};
