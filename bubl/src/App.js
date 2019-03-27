import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/HomeView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
      </div>
    );
  }
}

export default App;
