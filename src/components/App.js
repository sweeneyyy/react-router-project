import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Players from './Players.js';
import Teams from './Teams.js';
import Navbar from './Navbar.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/players' exact component={Players} />
            <Route path='/teams' exact component={Teams} />
            <Route render={() => <h1 className='text-center'>Four Oh Four</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
