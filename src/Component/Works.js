import React from 'react';
import './../styles/main.css';

function Works (props) {
  return (
    <div className="work-container">
      <div className="work-image">
        <img src={props.workImage} alt=""/>
        <div className="work-image__overlay">
        </div>
      </div>
      <div className="work-description">
        <h1>
          {props.title}
        </h1>
        <div className="work-description-text">
          <p>
            {props.description}
          </p>
        </div>
        <div className="work-techstack">
          <p>
            Tech Stack Used
          </p>
          <ul>
            {props.techStackJS ? <li>JavaScript</li> : null}
            {props.techStackReact ? <li>React</li> : null}
            {props.techStackHTML ? <li>HTML</li> : null}
            {props.techStackCSS ? <li>CSS</li> : null}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Works