import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { ManfredJsonInput } from '../../scenes/manfred-json-input/manfred-json-input.scene';
import { TemplateExportScene } from '../../scenes/template-export.scene/template-export.scene';

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<ManfredJsonInput />} />
        <Route path={switchRoutes.templateExportScene} element={<TemplateExportScene />} />
        <Route path="*" element={<ManfredJsonInput />}></Route>
      </Routes>
    </Router>
  );
};
