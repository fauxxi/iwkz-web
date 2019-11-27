import React, { useState } from "react";
import logo from "../../img/iwkz-navbar.svg";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [visibleNavbar, setVisibleNavbar] = useState(false);
  const [heroNavbar, setHeroNavbar] = useState(true);
  const activeBurgerClass = classNames("navbar-burger burger", {
    "is-active": burgerActive
  });
  const activeDropdownClass = classNames("navbar-menu", {
    "is-active": burgerActive
  });
  const navbarColorClass = classNames(
    "navbar is-fixed-top bt bw1 b--light-red",
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
  // const onClickNav = value => e => {
  //   e.preventDefault();
  //   // currentPage(value);
  // };

  window.addEventListener("scroll", function() {
    let scrollpos = window.scrollY;
    let areaJadwalSholat = document.getElementById("jadwal-sholat");
    if (areaJadwalSholat) {
      if (
        scrollpos + 100 >
        document.getElementById("jadwal-sholat").offsetTop
      ) {
        setVisibleNavbar(true);
        setHeroNavbar(false);
      } else {
        setVisibleNavbar(false);
        setHeroNavbar(true);
      }
    }
  });

  return (
    <nav className={navbarColorClass} style={{ transitionDuration: "0.4s" }}>
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={logo} alt="iwkz logo" width="112" height="112" />
        </Link>
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
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-item" to="/about-us">
              About Us
            </Link>
            <div className="navbar-dropdown is-boxed is-right">
              <Link className="navbar-item" to="/about-us#peran-iwkz">
                Peran IWKZ
              </Link>
              <Link className="navbar-item" to="/about-us#sejarah">
                Sejarah IWKZ
              </Link>

              <Link className="navbar-item" to="/about-us#impressum">
                impressum
              </Link>
            </div>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-item" to="/">
              Download
            </Link>
            <div className="navbar-dropdown is-boxed is-right">
              <Link className="navbar-item" to="/jadwal-sholat">
                Jadwal Sholat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
