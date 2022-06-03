import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './Sidebar/Sidebar';
import Cards from './Cards/Cards';
import Details from './Details/Details';

import './App.css';

const App = () => (
  <div className="index">
    <Sidebar />
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Cards />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
