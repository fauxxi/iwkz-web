import React, { useEffect } from "react";
import "./App.css";
// import './App.scss';
import Home from "./components/Home/Home";
import "tachyons";
import AboutUs from "./components/AboutUs/AboutUs";
import Download from "./components/Download/Download";
import Navbar from "./components/Navbar/Navbar";
import Impressum from "./components/Impressum/Impressum";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("to top", window.scrollY);
  });

  // const onClicked = value => {
  //   setCurrentSection(value);
  // };

  const smoothScroll = value => {
    let elmnt = document.getElementById(value);

    if (elmnt) {
      if (window.scrollY) {
        window.scroll(0, 0); // reset the scroll position to the top left of the document.
      }
      console.log("before", window.scrollY);
      elmnt.scrollIntoView({ behavior: "auto" });
      console.log("element top position", elmnt.offsetTop);
      console.log("after", window.scrollY);
    }
  };

  const TestAboutUs = props => {
    //TODO: get current path buat dapetin ID, terus scroll pake given ID
    //yang jadi masalah:
    //1. component TestAboutUs ke render 2x (cek di console di browser)
    //2. page ke refresh padahal cuma mau scroll
    //3. route /about-us doang gak jalan, bisanya kalo pake parameter e.g about-us/sejarah
    //4. bisa click on scroll, tapi kadang aneh/gak pas sama posisi nya
    const { hash } = props.location;
    const id = hash.replace("#", "");

    useEffect(() => {
      window.scrollTo(0, 0);
      // console.log("to top", window.scrollY);
    });

    useEffect(() => {
      smoothScroll(id);
    }, [id]);
    return (
      <div>
        <AboutUs />
      </div>
    );
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about-us">
            {withRouter(props => (
              <TestAboutUs {...props} />
            ))}
          </Route>
          <Route path="/jadwal-sholat">
            <Download />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Impressum />
    </div>
  );
}

export default App;
