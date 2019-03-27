import React from 'react'

export default function SchoolCard(props) {
  return (
    <div>
      <h1>{props.school.name}</h1>
      <button>Login</button>
      <button>Register</button>
    </div>
  )
}

