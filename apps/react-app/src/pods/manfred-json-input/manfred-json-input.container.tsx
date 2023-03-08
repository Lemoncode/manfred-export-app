import React, { useState } from 'react';
import { ManfredJsonInput } from './manfred-json-input.component';

export const ManfredJsonInputContainer: React.FC = () => {

  const [data, setData] = useState('');

  const handleData = (text:string) => {
    setData(text);
  }

  console.log("data", data);

  return <ManfredJsonInput handleData={handleData} />;
};
