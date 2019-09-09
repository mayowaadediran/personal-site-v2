import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Nav from './Component/Nav/Nav';
import About from './Pages/About';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Footer from './Component/Footer/Footer';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas  } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, fas)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>Mayowa Adediran Personal Site</title>
        </Helmet>
        <Nav/>
        <Switch>
          <Route exact path="/"  component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
