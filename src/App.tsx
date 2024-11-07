import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProjectsList } from './pages/ProjectsList';
import { Skills } from './pages/Skills';
import { ShowroomPage } from './pages/ShowroomPage';

export const App: React.FC = () => {

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsList />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/showroom" element={<ShowroomPage />} /> {/* Route pour la page showroom */}
      </Routes>
    </Router>
  );
};