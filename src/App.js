import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Content from './components/Content/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container is-primary has-navbar-fixed-top">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
