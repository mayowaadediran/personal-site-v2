import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import '../styles/main.css';


 class Footer extends Component {
  render() {
    return (
      <div className="footer container">
        <div className="footer-copyright">
          <p>
            &copy; 2019 | Crafted by Mayowa Adediran
          </p>
        </div>
      <div className="footer-social-links">
          <NavLink className="social-link">
            <FontAwesomeIcon icon={["fab", "twitter"]}/>
          </NavLink>
          <NavLink className="social-link">
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </NavLink>
          <NavLink className="social-link">
            <FontAwesomeIcon icon={["fab", "github"]}/>
          </NavLink>
          <NavLink className="social-link">
            <FontAwesomeIcon icon={["fab", "medium"]}/>
          </NavLink>
      </div>
      </div>
    )
  }
}

export default Footer
