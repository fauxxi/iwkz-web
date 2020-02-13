import React, { useEffect } from "react";
import Home from "./components/Home/Home";
import Download from "./components/Download/Download";
import Navbar from "./components/Navbar/Navbar";
import Impressum from "./components/Impressum/Impressum";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  const smoothScroll = value => {
    let elmnt = document.getElementById(value);

    if (elmnt) {
      elmnt.scrollIntoView({ behavior: "smooth" });
    }
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
      <Footer />
    </div>
  );
}

export default App;
