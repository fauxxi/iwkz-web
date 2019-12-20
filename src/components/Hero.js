import React from 'react';
import iwkzlogo from '../img/iwkz-navbar.png';
function Hero() {
  function toggleNav() {
    var burger = document.getElementById('nav-toggle');
    var nav = document.getElementById('navbarBasicExample');
    nav.classList.toggle('is-active');
    burger.classList.toggle('is-active');
    // var className = nav.getAttribute('class');
    // var burgerClass = burger.getAttribute('class');

    // if (className == 'navbar-menu' && burgerClass == 'navbar-burger burger') {
    //   nav.className = 'navbar-menu is-active';
    //   burger.burgerClass = 'navbar-burger burger is-active';
    //   console.log('true');
    // } else {
    //   nav.className = 'navbar-menu';
    //   burger.burgerClass = 'navbar-burger burger';
    //   console.log('else');
    // }
  }

  return (
    <div className="">
      <section className="hero">
        <nav
          className="navbar"
          role="navigation"
          aria-label="main navigation"
          style={{ paddingTop: 10, borderTop: '4px solid #8e3222' }}
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src={iwkzlogo} width="28" height="50" />
            </a>

            <a
              id="nav-toggle"
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
              onClick={toggleNav}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <a className="navbar-item">Home</a>

              <a className="navbar-item">Documentation</a>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">More</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">About</a>
                  <a className="navbar-item">Jobs</a>
                  <a className="navbar-item">Contact</a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item">Report an issue</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hero title</h1>
            <h2 className="subtitle">Hero subtitle</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
