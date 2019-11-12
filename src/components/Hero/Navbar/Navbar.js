import React from 'react';
import logo from '../../../img/iwkz-navbar.svg'

const Navbar = () => {
  const onBurgerClick = () => {
    document.querySelector('#navbar-toogle').classList.toggle('is-active');
    document.querySelector('.navbar-burger').classList.toggle('is-active');
  }
  return (
    <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} alt="iwkz logo" width="112" height="112" />
          </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample" onClick={onBurgerClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbar-toogle" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="/">
              About Us
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/">
                Download
              </a>
              <div className="navbar-dropdown is-boxed is-right">
                <a className="navbar-item" href="/">
                  Jadwal Sholat
                </a>
                <hr className="navbar-divider"/>
                <a className="navbar-item" href="/">
                  Elements
                </a>
                <a className="navbar-item is-active" href="/">
                  Components
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;