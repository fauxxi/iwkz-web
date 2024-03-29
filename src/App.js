import React, { useEffect } from "react";
import Home from "./components/Home/Home";
import Download from "./components/Download/Download";
import Streaming from "./components/Streaming";
import Navbar from "./components/Navbar/Navbar";
import Impressum from "./components/Impressum/Impressum";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  const smoothScroll = (value) => {
    if (value === "hero" || value === "home") {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      return;
    }
    let elmnt = document.getElementById(value);
    if (elmnt) {
      elmnt.scrollIntoView({ behavior: "smooth" });
    }
  };

  const TestHome = (props) => {
    const { hash } = props.location;
    const id = hash.replace("#", "");

    useEffect(() => {
      if (id) {
        smoothScroll(id);
      } else {
        smoothScroll("hero");
      }
    });
    //change return based on props
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
        <div style={{ paddingTop: "50px" }}>
          <Switch>
            <Route path="/jadwal-sholat">
              <Download />
            </Route>
            <Route path="/streaming/:channelId?">
              {withRouter((props) => (
                <Streaming {...props} />
              ))}
            </Route>
            <Route path="/">
              {withRouter((props) => (
                <TestHome {...props} />
              ))}
            </Route>
          </Switch>
        </div>
      </Router>
      <Impressum />
      <Footer />
    </div>
  );
}

export default App;
