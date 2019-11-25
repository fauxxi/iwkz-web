import React, { useState } from "react";
import logo from "../../../img/iwkz-navbar.svg";
import classNames from "classnames";

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [visibleNavbar, setVisibleNavbar] = useState(false);
  const [heroNavbar, setHeroNavbar] = useState(true);
  const activeBurgerClass = classNames("navbar-burger burger ", {
    "is-active": burgerActive
  });
  const activeDropdownClass = classNames("navbar-menu ", {
    "is-active": burgerActive
  });
  const navbarColorClass = classNames(
    "navbar is-fixed-top ",
    { "is-transparent": heroNavbar },
    { "has-background-white": visibleNavbar },
    { "shadow-5": visibleNavbar }
  );
  const onBurgerClick = () => {
    if (burgerActive) {
      setBurgerActive(false);
    } else {
      setBurgerActive(true);
    }
  };
  const onClickNav = value => e => {
    var elmnt = document.getElementById(value);
    elmnt.scrollIntoView({ behavior: "smooth" });
    e.preventDefault();
  };
  window.addEventListener("scroll", function() {
    let scrollpos = window.scrollY;
    if (scrollpos + 100 > document.getElementById("jadwalSholat").offsetTop) {
      setVisibleNavbar(true);
      setHeroNavbar(false);
    } else {
      setVisibleNavbar(false);
      setHeroNavbar(true);
    }
  });
  return (
    <nav
      className={"bt bw1 b--light-red " + navbarColorClass}
      style={{ transitionDuration: "0.4s" }}
    >
      <div className="navbar-brand">
        <div className="navbar-item" href="/" onClick={onClickNav("hero")}>
          <img src={logo} alt="iwkz logo" width="112" height="112" />
        </div>
        <div
          className={activeBurgerClass}
          data-target="navbarExampleTransparentExample"
          onClick={onBurgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={activeDropdownClass}>
        <div className="navbar-end">
          <div className="navbar-item" href="/" onClick={onClickNav("hero")}>
            Home
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <div className="navbar-link" href="/">
              About Us
            </div>
            <div className="navbar-dropdown is-boxed is-right">
              <div
                className="navbar-item"
                href="/"
                onClick={onClickNav("peranIwkz")}
              >
                Peran IWKZ
              </div>
              <div
                className="navbar-item"
                href="/"
                onClick={onClickNav("sejarah")}
              >
                Sejarah IWKZ
              </div>
              <div
                className="navbar-item"
                href="/"
                onClick={onClickNav("impressium")}
              >
                Impressium
              </div>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="/">
              Download
            </a>
            <div className="navbar-dropdown is-boxed is-right">
              <div className="navbar-item" href="/">
                Jadwal Sholat
              </div>
              <hr className="navbar-divider" />
              <div className="navbar-item" href="/">
                Elements
              </div>
              <div className="navbar-item is-active" href="/">
                Components
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
