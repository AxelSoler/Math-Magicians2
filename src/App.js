import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Home from './components/Home';

const App = () => (
  <div className="App">
    <h1>Math Magicians</h1>
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="Calculator">Calculator</Link>
        {/* <Link to="Home">Home</Link> */}
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Calculator" element={<Calculator />} />
      {/* <Route path="Quote" element={<Quote />} /> */}
    </Routes>
  </div>
);

export default App;
