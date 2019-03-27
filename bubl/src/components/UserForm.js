import React, { Component } from 'react';

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      username: '',
      password: '',
      school_id: ''
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmit = e => {
    e.preventDefault();
    const { name, username, password, school_id } = this.state;
    this.props.handleUserAuth({ name, username, password, school_id });
    this.setState({ name: '', username: '', password: '', school_id: '' });
  };

  render() {
    const { name, username, password, school_id } = this.state;
    return (
      <form className="form" onSubmit={this.formSubmit}>
        <input
          type="text"
          value={name}
          name="name"
          placeholder="Enter name..."
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          value={username}
          name="height"
          placeholder="Enter height..."
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          value={password}
          name="age"
          placeholder="Enter age..."
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          value={school_id}
          name="age"
          placeholder="Enter age..."
          onChange={this.handleInputChange}
        />
        
        <button type="submit">{this.props.title}</button>
      </form>
    );
  }
}

export default UserForm;