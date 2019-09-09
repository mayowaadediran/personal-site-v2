import React, { Component } from 'react';
import { NavLink , Link } from 'react-router-dom';
import logo from './../assets/img/myLogo.svg';
import resume from './../assets/files/Mayowa_Adediran_CV.pdf'


class Nav extends Component {
  render() {
    return (
      <div className="Nav container">
        <Link exact to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>
        
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

          <a href="https://medium.com/@ace_mayor" target="_blank" rel="noopener noreferrer" className="Nav-link" activeClassName="Nav-link-active">
            writings
          </a>

          <a className="Nav-link" href={resume} download>
            resume
          </a>
        </div>
      </div>
    )
  }
}


export default Nav