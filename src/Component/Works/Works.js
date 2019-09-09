import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Works (props) {
  return (
    <div className="work-container">
      <div className="work-image">
        <img src={props.workImage} alt=""/>
        <div className="work-image__overlay">
        </div>
      </div>
      <div className="work-description">
        <div className="work-description-head">
          <h1>
          {props.title}
          </h1>
          {props.projectLink ? <a className="work-description-icon" target="_blank" href={props.link} rel="noopener noreferrer"><FontAwesomeIcon icon={["fas", "external-link-alt"]}/></a> : null} 
          {props.githubLink ? <a className="work-description-icon" target="_blank" href={props.github} rel="noopener noreferrer"> <FontAwesomeIcon icon={["fab", "github"]}/></a> : null}
        </div>
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
            {props.techStackNodeJS ? <li>NODEJS</li> : null}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Works