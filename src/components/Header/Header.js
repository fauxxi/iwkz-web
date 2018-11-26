import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

class Header extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      navColor: 'none'
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.listenScrollEvent = this.listenScrollEvent.bind(this);
  }

  listenScrollEvent = e =>{
    if(window.scrollY > window.innerHeight){
      this.setState({navColor: 'white'});
      //console.log(this.state.navColor);
    } else{
      this.setState({navColor: 'none'});
      //console.log(this.state.navColor);
    }
  }

  componentDidMount(){
    this._isMounted = true;
    if(this._isMounted){
      window.addEventListener('scroll', this.listenScrollEvent);
    }
  }

  componentWillUnmount(){
    this._isMounted = false;
  }

  toggleNav() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top is-transparent"
        style={{ background: this.state.navColor}}
      >
        <div className="navbar-brand ">

          <NavLink className="navbar-item" to="/" >
            <img
              src={require("../../img/iwkz-navbar.svg")}
              alt="IWKZ"
              width="120"
              height="120"
            />
          </NavLink>
          <div
            className={
              this.state.isActive
                ? "navbar-burger is-active is-transparent"
                : "navbar-burger is-transparent"
            }
            onClick={this.toggleNav}
            data-target="navbarExampleTransparentExample"
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div
          id="navbarExampleTransparentExample"
          className={
            this.state.isActive
              ? "navbar-menu is-active is-transparent"
              : "navbar-menu is-transparent"
          }
        >
          <div className="navbar-start">
            <a href="https://tutorium.iwkz.de/" target="_blank" rel="noopener noreferrer" className="navbar-item">Tutorium</a>
            <NavLink className="navbar-item" to="/download" activeClassName="is-active">
              Download
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
