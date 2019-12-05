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
  const smoothScroll = value => {
    let elmnt = document.getElementById(value);

    if (elmnt) {
      elmnt.scrollIntoView({ behavior: "smooth" });
    }
  };

  const TestAboutUs = props => {
    const { hash } = props.location;
    const id = hash.replace("#", "");

    useEffect(() => {
      if (id) {
        smoothScroll(id);
      } else {
      }
    });
    return (
      <div>
        <AboutUs />
      </div>
    );
  };
  const TestHome = props => {
    const { hash } = props.location;
    const id = hash.replace("#", "");

    useEffect(() => {
      if (id) {
        smoothScroll(id);
      } else {
        smoothScroll("hero");
      }
    });
    return (
      <div>
        <Home />
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
            {withRouter(props => (
              <TestHome {...props} />
            ))}
          </Route>
        </Switch>
      </Router>
      <Impressum />
    </div>
  );
}

export default App;
