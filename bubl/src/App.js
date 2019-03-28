import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Bubles from './components/Bubles';
import Home from './components/HomeView';
import UserForm from './components/UserForm';

class App extends Component {
  state = {
    school_id: null,
    registering: false,

  }

  handleUserLogin = (school, registering) => {
    this.setState({
      school_id: school.school_id,
      registering
    })
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={props => <Home {...props} userLoginState={this.state} handleUserLogin={this.handleUserLogin} /> } />
        <Route exact path='/Bubles' component={Bubles} />
    <Route exact path='/Register' render={ props => <UserForm {...props} userLoginState={this.state}/>} />
      </div>
    );
  }
}

export default App;
