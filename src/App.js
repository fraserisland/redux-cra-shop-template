import React, { Component } from 'react';

import Router from './Router'
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <div className="page__container"> 
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
