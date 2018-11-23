/* eslint-disable */
import React, { Component } from "react";
import Header from "./components/Header/Header";
//import HeroHeader from "./components/Header/HeroHeader";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Content/Hero";
import PostCard from "./components/Content/postCard/PostCard";
import ProfilAlfalah from "./components/Content/profilAlfalah/ProfilAlfalah";
import Hadist from "./components/Content/hadistGenerator/Hadist";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <section
          className="hero is-fullheight"
          style={{
            background: "linear-gradient(45deg, #e0c3fc 0%,  #8ec5fc 100%)"
          }}
        >
          <Header />
          <div className="hero-body wave-background">
            <Hero />
          </div>
        </section>
        <section className="section">
          <ProfilAlfalah />
          <PostCard />
        </section>
        <section className="section has-background-white-ter">
          <Hadist />
        </section>
        <section className="section">
          <div className="hero-foot ">
            <Footer />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
