import React from "react";
import "./App.css";
// import './App.scss';
import Hero from "./components/Hero/Hero";
import "tachyons";
import AboutUs from "./components/AboutUs/AboutUs";
import PeranIwkz from "./components/AboutUs/PeranIwkz";
import Impressium from "./components/Impressium/Impressium";
import Timeline from "./components/AboutUs/Timeline";

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutUs />
      <PeranIwkz />
      <Timeline />
      <Impressium />
    </div>
  );
}

export default App;
