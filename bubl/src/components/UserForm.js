import React, { Component } from 'react';
import  { connect } from "react-redux";
import { handleUserAuth, login} from '../store/actions/actions';

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      password: '',
      school_id: this.props.userLoginState.school_id
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  formSubmit = e => {
    e.preventDefault();
    const { name, username, password, school_id } = this.state;
    if (this.props.registering) {
        this.props.handleUserAuth({ name, username, password, school_id });
    } else {
        this.props.login({ username, password });
    }
    this.setState({ name: '', username: '', password: '' });
    this.props.history.push('/Bubles')
  };

  render() {
      console.log('formprops', this.props);
      
    const { name, username, password, school_id } = this.state;
    return (
      <form className="form" onSubmit={this.formSubmit}>
        {this.props.userLoginState.registering ? <input
          type="text"
          value={name}
          name="name"
          placeholder="Enter name..."
          onChange={this.handleInputChange}
        /> : null}
        <input
          type="text"
          value={username}
          name="username"
          placeholder="Enter username..."
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          value={password}
          name="password"
          placeholder="Enter password..."
          onChange={this.handleInputChange}
        />
        {this.props.userLoginState.registering ? <input
          type="text"
          value={school_id}
          name="school_id"
          placeholder="Enter school id..."
          onChange={this.handleInputChange}
        /> : null}
        
        <button type="submit">{this.props.title}Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      user: state.userReducer.user,
      requesting: state.userReducer.requesting
  
    }
  
  }
  
  export default connect(mapStateToProps, {handleUserAuth, login})(UserForm)
  

