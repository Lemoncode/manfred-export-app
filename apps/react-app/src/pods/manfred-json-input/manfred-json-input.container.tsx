import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ManfredJsonInput } from './manfred-json-input.component';
import { switchRoutes } from '@/core';

export const ManfredJsonInputContainer: React.FC = () => {

  const [data, setData] = useState('');
  const navigate = useNavigate();


  const handleData = (text:string) => {
    setData(text);
    navigate(switchRoutes.templateExportScene);
  }

  return <ManfredJsonInput handleData={handleData} />;
};
