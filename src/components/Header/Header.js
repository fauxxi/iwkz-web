import React, {Component} from 'react';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      isActive: false,
    }
    this.toggleNav = this.toggleNav.bind(this);
  }


  toggleNav() {
    this.setState({
      isActive :!this.state.isActive
    })
  }

  render() {
    return (
    <div className="navbar is-fixed-top has-background-grey-dark is-transparent has-text-primary">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"></img>
        </a>
        <div className={this.state.isActive ? "navbar-burger burger is-active has-text-primary" : "navbar-burger burger has-text-primary"} onClick={this.toggleNav} data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className={this.state.isActive ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-start">
          <a className="navbar-item has-text-black" href="https://bulma.io">
            Home
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link has-text-black" href="https://google.com">google</a>
            <div className="navbar-dropdown is-boxed ">
              <a className="navbar-item has-text-black">plus</a>
              <hr className="navbar-divider" />
              <a className="navbar-item is-active has-text-black">now</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
  }
}

export default Header;
