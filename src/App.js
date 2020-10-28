import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Hero from './components/Hero'
import Recommended from './components/Recommended'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Recommended />
       </div>
  );
}

export default App;
