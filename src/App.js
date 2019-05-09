import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Nav from './Component/Nav';
import About from './Pages/About';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';
import Footer from './Component/Footer';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas  } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


library.add(fab, fas)


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
