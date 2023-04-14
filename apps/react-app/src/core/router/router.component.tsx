import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { switchRoutes } from '@/core';
import { Home } from '@/scenes/home';
import { TemplateExportScene } from '@/scenes/template-export.scene';

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<Home />} />
        <Route path={switchRoutes.templateExportScene} element={<TemplateExportScene />} />
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};
