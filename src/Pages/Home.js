import React, { Component } from 'react';
import './../styles/main.css'

class Home extends Component {
  render() {
    return (
      <div className="home container">
        <div className="home-content">
          <h1>
            Hi, I'm Mayowa
          </h1>
          <h2>
            A <span className="strong-span">Frontend Web Developer</span> from Lagos, Nigeria. I love creating things that work on
            the internet with a user-centric and simplistic approach. When I'm not coding, I'm not coding.
          </h2>
          <p>
            Get in touch
            <span>
              <a href="mailto:ddrn_mayowa@yahoo.com" className="email">
                ddrn_mayowa@yahoo.com
              </a>
            </span>
          </p>
        </div>
      </div>
    )
  }
}

export default  Home