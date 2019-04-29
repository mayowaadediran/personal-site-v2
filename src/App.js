import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Nav from './Component/Nav';
import About from './Component/About';
import Home from './Component/Home';
import Portfolio from './Component/Portfolio';
import Blog from './Component/Blog';
import Footer from './Component/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
