import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

const App = () => (
  <div className="App">
    <h1>Math Magicians</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="Calculator">Calculator</Link></li>
        <li><Link to="Quote">Quote</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Calculator" element={<Calculator />} />
      <Route path="Quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
