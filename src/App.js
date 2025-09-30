// File: src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Partner from './pages/Partner';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="/about" element={<><Navbar /><About /></>} />
          <Route path="/services" element={<><Navbar /><Services /></>} />
          <Route path="/gallery" element={<><Navbar /><Gallery /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /></>} />
          <Route path="/careers" element={<><Navbar /><Careers /></>} />
          <Route path="/partner" element={<><Navbar /><Partner /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;