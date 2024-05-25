import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Project from './Components/Project/Project';
import Certificates from './Components/Certificates/Certificates';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';

const App = () => {
  return (
    <div className='app'>
      <Router basename="/Portfolio">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
