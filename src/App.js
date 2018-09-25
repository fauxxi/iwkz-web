import React, { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Content/Hero";
import PostCard from './components/Content/postCard/PostCard';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section
          className="hero is-fullheight"
          style={{
            background: "linear-gradient(45deg, #e0c3fc 0%,  #8ec5fc 100%)"
          }}
        >
          <div className="hero-body">
            <Hero />
          </div>
        </section>
        <section className="section">
          <PostCard />
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
