import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

function SchoolCard(props) {
    console.log('schoolCard', props);
    
  return (
    <div>
      <h1>{props.school.name}</h1>
      <button onClick = { () => {
          props.handleUserLogin({school: props.school, registering: false}) 
          props.history.push('/Register')
          }}>Login</button>
      <button onClick = { () => {
          props.handleUserLogin({school: props.school, registering: true}) 
          props.history.push('/Register')
          }}>Register</button>
      
    </div>
  )
}

export default withRouter (SchoolCard)

