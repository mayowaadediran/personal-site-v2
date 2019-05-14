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
          <NavLink exact to="/" className="Nav-link" activeClassName="Nav-link-active">
            hi
          </NavLink>

           <NavLink to= "/about" className="Nav-link" activeClassName="Nav-link-active">
            about
          </NavLink>

          <NavLink to="/portfolio" className="Nav-link" activeClassName="Nav-link-active">
            portfolio
          </NavLink>

          <NavLink to="/blog" className="Nav-link" activeClassName="Nav-link-active">
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