import React from 'react';
import './App.css';
// import './App.scss';
import Hero from './components/Hero/Hero';
import 'tachyons';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">   
      <Hero/>
      <Home/>
    </div>
  );
}

export default App;
