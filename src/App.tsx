import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProjectsList } from './pages/ProjectsList';
import { Skills } from './pages/Skills';

export const App: React.FC = () => {





  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/ProjectsList' element={<ProjectsList />} />
        <Route path='/Skills' element={<Skills />}/>
      </Routes>
    </Router>
  );
};
