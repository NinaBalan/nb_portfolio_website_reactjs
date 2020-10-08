import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navbar from './navbar';

import '../style/main.scss';
import Home from '../content/Home';
import Education from '../content/Education';
import Skills from '../content/Skills';
import Contact from '../content/Contact';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar/>
          <Route exact path='/'>
            <Home />
          </Route>
          {/*Route for about.js contents */}
          <Route path='/about'>
            <About />
          </Route>
          {/* Route for Education.js contents */}
          <Route path="/education">
            <Education />
          </Route>
          <Route path='/skills'>
            <Skills />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>
        </div>
      </Router>
    );
  }
}
