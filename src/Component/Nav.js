import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../assets/img/myLogo.svg';


class Nav extends Component {
  render() {
    return (
      <div className="Nav container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="Nav-area">
          <NavLink to="/"className="Nav-link">
            hi
          </NavLink>

           <NavLink to= "/about" className="Nav-link">
            about
          </NavLink>

          <NavLink to="/portfolio" className="Nav-link">
            portfolio
          </NavLink>

          <NavLink to="/blog" className="Nav-link">
            blog
          </NavLink>

          <NavLink to="/resume" className="Nav-link">
            resume
          </NavLink>
        </div>
      </div>
    )
  }
}


export default Nav