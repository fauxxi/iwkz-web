import React, { useState } from "react";
import logo from "../../img/iwkz-navbar.svg";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  const activeBurgerClass = classNames("navbar-burger burger", {
    "is-active": burgerActive
  });
  const activeDropdownClass = classNames("navbar-menu", {
    "is-active": burgerActive
  });

  const navbarClass = classNames(
    "navbar is-fixed-top bt bw1 b--light-red has-background-white shadow-5"
  );
  const onBurgerClick = () => {
    if (burgerActive) {
      setBurgerActive(false);
    } else {
      setBurgerActive(true);
    }
  };

  return (
    <nav className={navbarClass} style={{ transitionDuration: "0.4s" }}>
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
          <Link className="navbar-item" to="/#tentang-masjid">
            Tentang Masjid
          </Link>
          <Link className="navbar-item" to="/#peran-iwkz">
            Peran IWKZ
          </Link>
          {/* <Link className="navbar-item" to="/about-us#sejarah">*/}
          <Link className="navbar-item" to="/#sejarah">
            Sejarah IWKZ
          </Link>
          <Link className="navbar-item" to="/jadwal-sholat">
            Jadwal Sholat
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
