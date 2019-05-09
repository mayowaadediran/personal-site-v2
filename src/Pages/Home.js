import React, { Component } from 'react';
import './../styles/main.css'

class Home extends Component {
  render() {
    return (
      <div className="home container">
        <div className="hi-content">
          <div>
            <h1>
              Hi, I'm Mayowa
            </h1>
            <h2>
              A <span className="strong-span">Frontend Web Developer</span> from Lagos, Nigeria. I love creating things that work on
              the internet with a user-centric
              and simplistic approach.
            When I'm not coding, i'm writing tech stuff on my blog and rambling about life on my medium
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
        
        <div>
          <div className="hi-image">
            <img src="" alt="" />
          </div>
        </div>
        
      </div>
    )
  }
}

export default  Home