import React from "react";
import logo from "../../../img/iwkz-navbar.svg";

const Navbar = () => {
  const onBurgerClick = () => {
    document.querySelector("#navbar-toogle").classList.toggle("is-active");
    document.querySelector(".navbar-burger").classList.toggle("is-active");
  };

  const onClickNav = (e, value) => {
    var elmnt = document.getElementById(value);
    elmnt.scrollIntoView({ behavior: "smooth" });
    e.preventDefault();
  };

  window.addEventListener("scroll", function() {
    let scrollpos = window.scrollY;
    let fixedNavbar = document.querySelector(".navbar");
    if (scrollpos > document.getElementById("hero").offsetHeight) {
      fixedNavbar.classList.remove("is-transparent");
      fixedNavbar.classList.add("has-background-white");
      fixedNavbar.classList.add("shadow-5");
    } else {
      fixedNavbar.classList.remove("has-background-white");
      fixedNavbar.classList.remove("shadow-5");
      fixedNavbar.classList.add("is-transparent");
    }

    console.log(scrollpos);
  });

  return (
    <nav
      className="navbar is-fixed-top is-transparent"
      style={{ transitionDuration: "0.3s" }}
    >
      <div className="navbar-brand">
        <div
          className="navbar-item"
          href="/"
          onClick={e => onClickNav(e, "hero")}
        >
          <img src={logo} alt="iwkz logo" width="112" height="112" />
        </div>
        <div
          className="navbar-burger burger"
          data-target="navbarExampleTransparentExample"
          onClick={onBurgerClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbar-toogle" className="navbar-menu">
        <div className="navbar-end">
          <div
            className="navbar-item"
            href="/"
            onClick={e => onClickNav(e, "hero")}
          >
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
                onClick={e => onClickNav(e, "peranIwkz")}
              >
                Peran IWKZ
              </div>
              <div
                className="navbar-item"
                href="/"
                onClick={e => onClickNav(e, "sejarah")}
              >
                Sejarah IWKZ
              </div>
              <div
                className="navbar-item"
                href="/"
                onClick={e => onClickNav(e, "impressium")}
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
