import React from 'react';
import './App.css';
// import './App.scss';
import Hero from './components/Hero/Hero';
import 'tachyons';
import AboutUs from './components/AboutUs/AboutUs';
import PeranIwkz from './components/AboutUs/PeranIwkz';

function App() {
  return (
    <div className="App">   
      <Hero/>
      <AboutUs/>
      <PeranIwkz/>
    </div>
  );
}

export default App;
