import React from "react";
import "./App.css";
// import './App.scss';
import Hero from "./components/Hero/Hero";
import "tachyons";
import AboutUs from "./components/AboutUs/AboutUs";
import Impressium from "./components/Impressium/Impressium";

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutUs />
      <Impressium />
    </div>
  );
}

export default App;
