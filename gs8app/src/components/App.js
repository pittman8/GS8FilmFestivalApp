import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import '../css/App.css';

import { Navbar } from './Navbar';

function App() {
  return (
    <div className="App">
          <Navbar />
    </div>
  );
}

export default App;
