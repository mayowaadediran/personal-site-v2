import React, { Component } from 'react';
import './../styles/main.css';

class About extends Component {
  render() {
    return (
      <div className="about container">
        <div className="about-content">
          <div className="about-content-profile">
            <div className="content-head">
              <h2>
                About Me
              </h2>
            </div>
            <p>
              Hi! I'm Mayowa Adediran. A web developer based in Lagos, Nigeria. I have a passion for building stuff that work on the internet with 
              a simplistic and user-centric approach. By stuff, I mean websites and webapps, with focus mainly on Front-end.
            </p>
            <p>
              I started out in a business role as a business development executive at Systemspecs where I developed my passion for the web.
              In 2017, I transitioned to become a web developer. I have since developed my skills in web development technologies by enrolling 
              for Udacity Frontend Developer NanoDegree in 2018 and attending a full stack web developer bootcamp at NESAbyMakers in 2019. I'm looking for opportunities to start a career as a web developer. 
            </p>
          </div>
          <div className="about-content-skills">
            <div className="content-head">
              <h2>
                Skills
              </h2>
            </div>
            <p>
              I have 2 years experience with Frontend tools, frameworks and languages, building interfaces and websites with HTML, CSS, Javascript and React.
            </p>
            <div className="about-content-skills-section">
              <h4>
                Programming languages/frameworks
              </h4>
              <div className="skill-icon-container">
               <ul>
                 <li>
                   HTML
                 </li>
                 <li>
                   CSS
                 </li>
                 <li>
                   ES6 JAVASCRIPT
                 </li>
                 <li>
                   REACT
                 </li>
                 <li>
                   SASS
                 </li>
                 <li>
                   NODEJS
                 </li>
                 <li>
                   EXPRESSJS
                 </li>
               </ul>             
             </div>
            </div>
            <div className="about-content-skills-section">
              <h4>
                Tools
              </h4>
              <div className="skill-icon-container">
               <ul>
                 <li>
                   GIT
                 </li>
                 <li>
                   GULP
                 </li>
                 <li>
                    FIGMA
                 </li>
               </ul>             
             </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
