import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { Scene1 } from '../../scenes/scene1/scene1';
import { Scene2 } from '../../scenes/scene2/scene2';

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<Scene1 />} />
        <Route path={switchRoutes.scene2} element={<Scene2 />} />
        <Route path="*" element={<Scene1 />}></Route>
      </Routes>
    </Router>
  );
};
