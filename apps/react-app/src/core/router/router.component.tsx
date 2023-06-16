import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { switchRoutes } from '@/core';
import { TemplateExportScene } from '@/scenes/template-export.scene';
import { HomeScene } from '@/scenes/home.scene';
import { AboutUsScene } from '@/scenes/about-us.scene';

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<HomeScene />} />
        <Route path={switchRoutes.templateExportScene} element={<TemplateExportScene />} />
        <Route path={switchRoutes.aboutUsScene} element={<AboutUsScene />} />
        <Route path="*" element={<HomeScene />}></Route>
      </Routes>
    </Router>
  );
};
