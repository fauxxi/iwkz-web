import React, { useState, useEffect } from "react";
import "./App.css";
// import './App.scss';
import Hero from "./components/Hero/Hero";
import "tachyons";
import AboutUs from "./components/AboutUs/AboutUs";
import Download from "./components/Download/Download";
import Navbar from "./components/Navbar/Navbar";
import Impressum from "./components/Impressum/Impressum";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function App() {
  const [currentSection, setCurrentSection] = useState("hero");

  useEffect(() => {
    console.log("useeffect", currentSection);
    smoothScroll(currentSection);
  });

  // const onClicked = value => {
  //   setCurrentSection(value);
  // };

  const smoothScroll = value => {
    console.log("smooth", value);
    let elmnt = document.getElementById(value);
    if (elmnt) {
      elmnt.scrollIntoView({ behavior: "smooth" });
    }
  };

  const TestAboutUs = () => {
    //TODO: get current path buat dapetin ID, terus scroll pake given ID
    //yang jadi masalah:
    //1. component TestAboutUs ke render 2x (cek di console di browser)
    //2. page ke refresh padahal cuma mau scroll
    //3. route /about-us doang gak jalan, bisanya kalo pake parameter e.g about-us/sejarah
    //4. bisa click on scroll, tapi kadang aneh/gak pas sama posisi nya
    let { id } = useParams();
    setCurrentSection(id);
    console.log("TestAboutUs", id);
    return (
      <div>
        <p>{id}</p>
        <AboutUs />
      </div>
    );
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about-us/:id">
            <TestAboutUs />
          </Route>
          <Route path="/jadwal-sholat">
            <Download />
          </Route>
          <Route path="/">
            <Hero />
          </Route>
        </Switch>
      </Router>
      <Impressum />
    </div>
  );
}

export default App;
