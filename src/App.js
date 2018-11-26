/* eslint-disable */
import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux';
import {fetchPost} from './actions/postAction';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Download from './components/Content/download/Download';
import Error from './components/Error/Error';

import {HeartSpinner} from 'react-spinners-kit';

import {Spring, config} from 'react-spring';


import "./App.css";

class App extends Component {

  componentWillMount(){
    setTimeout(()=>this.props.fetchPost(), 0);
  }


  render() {

    if(!this.props.isLoaded){
      return (
        <Spring  from={{opacity: 0,transform: 'translate3d(0,0px,0)'}} to={{opacity: 1,transform: 'translate3d(0,0,0)'}} >
          {props =>
            <div style={props}>
              <section
                className="hero is-fullheight"
                style={{
                  background: "white"
                }}
              >

              <div className="center-spinner">
                <HeartSpinner size={200} color="red"/>
              </div>

              </section>
            </div>
          }
        </Spring>
      );
    }

    return (

      <BrowserRouter>
      <Spring config={config.slow} from={{opacity: 0,transform: 'translate3d(0,-100px,0)'}} to={{opacity: 1,transform: 'translate3d(0,0px,0)'}} >
        {props =>
          <div style={props}>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/download" component={Download} />
            <Route component={Error} />
          </Switch>
          </div>
        }
        </Spring>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  isLoaded: state.posts.isLoaded
})

export default connect(mapStateToProps,{fetchPost})(App);
