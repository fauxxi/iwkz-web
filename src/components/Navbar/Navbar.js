import React, { useState } from "react";
import logo from "../../img/iwkz-navbar.svg";
import classNames from "classnames";

import { SyledNav, StyledText, StyledLink } from "./styled.components.js";

const Navbar = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  const activeBurgerClass = classNames("navbar-burger burger", {
    "is-active": burgerActive
  });
  const activeDropdownClass = classNames("navbar-menu", {
    "is-active": burgerActive
  });

  const navbarClass = classNames("navbar is-fixed-top");
  const onBurgerClick = () => {
    if (burgerActive) {
      setBurgerActive(false);
    } else {
      setBurgerActive(true);
    }
  };

  return (
    <SyledNav className={navbarClass}>
      <div className="navbar-brand">
        <StyledLink className="navbar-item" to="/">
          <img
            className="iwkz-logo"
            src={logo}
            alt="iwkz logo"
            width="112"
            height="112"
          />
        </StyledLink>
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

      <div className={activeDropdownClass} onClick={onBurgerClick}>
        <div className="navbar-end">
          <StyledLink className="navbar-item" to="/">
            <StyledText>Home</StyledText>
          </StyledLink>
          <StyledLink className="navbar-item" to="/#tentang-masjid">
            <StyledText>Tentang Masjid</StyledText>
          </StyledLink>
          <StyledLink className="navbar-item" to="/#peran-iwkz">
            <StyledText>Peran IWKZ</StyledText>
          </StyledLink>

          <StyledLink className="navbar-item" to="/#sejarah">
            <StyledText>Sejarah IWKZ</StyledText>
          </StyledLink>
          <StyledLink className="navbar-item" to="#impressum">
            <StyledText>Contact us</StyledText>
          </StyledLink>
          <StyledLink className="navbar-item" to="/jadwal-sholat">
            <StyledText>Download Jadwal Sholat</StyledText>
          </StyledLink>
        </div>
      </div>
    </SyledNav>
  );
};

export default Navbar;
