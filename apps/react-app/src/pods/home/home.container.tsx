import React from 'react';
import { Home } from './home.component';
import { useNavigate } from 'react-router-dom';
import { switchRoutes } from '@/core';

export const HomeContainer: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(switchRoutes.manfredJsonInputScene);
  };

  return <Home goToManfredJsonInput={handleNavigation} />;
};
