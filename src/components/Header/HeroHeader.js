import React, { Component } from "react";

class HeroHeader extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="hero-head">
        <nav className="navbar">
          <div className="container is-fluid">
            <div className="navbar-brand">
              <a className="navbar-item">
                <img
                  src={require("../../img/iwkz-navbar.svg")}
                  alt="IWKZ"
                  width="120"
                  height="120"
                />
              </a>
              <span
                className="navbar-burger burger"
                data-target="navbarMenuHeroA"
              >
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">Home</a>
                <a className="navbar-item">Examples</a>
                <a className="navbar-item">Documentation</a>
                <span className="navbar-item">
                  <a className="button is-primary is-inverted">
                    <span className="icon">
                      <i className="fab fa-github" />
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeroHeader;
