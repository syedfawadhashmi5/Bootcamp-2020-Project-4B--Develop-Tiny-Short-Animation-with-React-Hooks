import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Career from './Components/Career';
import Contect from './Components/Contect';
import Services from './Components/Services';
import NotFound from './Components/NotFound';
import Navber from './Navber';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";




function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Career" element={<Career />} />
        <Route path="Contect" element={<Contect />} />
        <Route path="Services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
