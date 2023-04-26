import React from 'react';
import { useNavigate } from 'react-router-dom';
import { switchRoutes, UserChoiceContext, useUserChoiceContext } from '@/core';
import { Home } from './home.component';

export const HomeContainer: React.FC = () => <Home />;
