import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          <a href="https://github.com/mayowaadediran" target="_blank" rel='noreferrer noopener' className="social-link">
            <FontAwesomeIcon icon={["fab", "github"]}/>
          </a>
          <a href="https://twitter.com/ace_mayor" target="_blank" rel='noreferrer noopener' className="social-link">
            <FontAwesomeIcon icon={["fab", "twitter"]}/>
          </a>
          <a href="https://www.linkedin.com/in/mayowa-adediran/" target="_blank" rel='noreferrer noopener' className="social-link">
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </a>
          <a href="https://medium.com/@ace_mayor" target="_blank" rel='noreferrer noopener' className="social-link">
            <FontAwesomeIcon icon={["fab", "medium"]}/>
          </a>
        </div>
      </div>
    )
  }
}

export default Footer
