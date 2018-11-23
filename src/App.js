/* eslint-disable */
import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Download from './components/Content/download/Download';
import Error from './components/Error/Error';


import "./App.css";

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/download" component={Download} />
          <Route component={Error} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
