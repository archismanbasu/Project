import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Contacts from './components/Contacts';
import ThermalCheck from './components/pages/ThermalCheck';
import RadarCheck from './components/pages/RadarCheck';
import VisualCheck from './components/pages/VisualCheck'; 

import './App.css';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/thermal-check" element={<ThermalCheck />} />
        <Route path='/radar-check' element={<RadarCheck />} />
        <Route path='/visual-check' element={<VisualCheck />} /> 
      </Routes>
    </Router>
  );
}

export default App;
