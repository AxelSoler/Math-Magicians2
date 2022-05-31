import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';

const App = () => (
  <div className="App">
    <h1>Math Magicians</h1>
    <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="Calculator" element={<Calculator />} />
      {/* <Route path="Quote" element={<Quote />} /> */}
    </Routes>
  </div>
);

export default App;
