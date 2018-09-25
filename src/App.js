import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="hero is-fullheight" style={{background: "linear-gradient(45deg, #e0c3fc 0%,  #8ec5fc 100%)"}}>
        <div className="hero-body">
          <Header />
          <Content />
          <Footer />
        </div>
      </section>
    );
  }
}

export default App;
