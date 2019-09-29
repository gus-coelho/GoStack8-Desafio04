import React, { Component } from "react";

import logo from "../img/facebook-1.svg";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src={logo} alt="Logo" />
          <div>
            <span>Meu perfil</span>
            <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
