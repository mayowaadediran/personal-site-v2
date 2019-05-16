import React, { Component } from 'react';
import Works from './../Component/Works';
import memoryGame from './../assets/img/memory-game.png';
import reactWeatherApp from './../assets/img/react-weather-app.png';
import nesaByMakers from './../assets/img/nesa-image.png';
import './../styles/main.css'

 class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio container">
        <div className="content-head">
          <h2>
            Selected Projects
          </h2>
          <p>Showcase of some side projects and experiments. To see  more projects i'm working/worked on, check out my github</p>
        </div>
        <div className="works">
          <Works 
            title = "React Weather App"
            description = "A weather app display weather conditions and forecast for locations around the world. This app was created to practice developing app with react that require making api calls to external data. Weather data are retrieved from the OpenWeather Api"
            workImage = {reactWeatherApp}
            techStackReact = {true}
            techStackOthers = {true}
            githubLink = {true}
            projectLink = {true}
            link = "https://react-weather-app-ng.netlify.com"
          />
          <Works 
            title = "Memory Game"
            description = "A memory game done as part of my Udacity Nanodegree. Testing my skills with JavaScript DOM manipulation and CSS animations"
            workImage = {memoryGame}
            techStackHTML = {true}
            techStackCSS = {true}
            techStackJS = {true}
          />
          <Works 
            title = "NesaByMakers Bootcamp"
            description= "A collection of projects, practices and assignments done during my 6 month full stack developer bootcamp"
            workImage = {nesaByMakers}
            techStackHTML = {true}
            techStackCSS = {true}
            techStackJS = {true}
            techStackReact = {true}
          />
        </div>
      </div>
    )
  }
}

export default Portfolio
