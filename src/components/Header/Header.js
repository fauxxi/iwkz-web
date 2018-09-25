import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <nav
        className="navbar is-transparent is-fixed-top"
        role="navigation"
        aria-label="main navigation"
        style={{ background: "none" }}
      >
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img
              src={require("../../img/iwkz-navbar.svg")}
              alt="IWKZ"
              width="120"
              height="120"
            />
          </a>
          <div
            className={
              this.state.isActive
                ? "navbar-burger is-active has-text-white"
                : "navbar-burger has-text-white"
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
            <a className="navbar-item">Home</a>
            <a className="navbar-item">Kegiatan</a>
            <a className="navbar-item">Layanan Masyarakat</a>
            <a className="navbar-item">PRS</a>
            <a className="navbar-item">Download</a>
            <a className="navbar-item">Tentang Kami</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
