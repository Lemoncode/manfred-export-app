import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { switchRoutes } from '@/core';
import { ManfredJsonInputScene } from '@/scenes/manfred-json-input.scene';
import { TemplateExportScene } from '@/scenes/template-export.scene';

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<ManfredJsonInputScene />} />
        <Route path={switchRoutes.templateExportScene} element={<TemplateExportScene />} />
        <Route path="*" element={<ManfredJsonInputScene />}></Route>
      </Routes>
    </Router>
  );
};
