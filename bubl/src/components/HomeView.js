import React, { Component } from 'react'
import  { connect } from "react-redux";
import { fetchSchools} from '../store/actions/actions';
import SchoolCard from './SchoolCard';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {schools: []}
  }

  componentDidMount() {
    this.props.fetchSchools();
  }



  render() {
      console.log(this.props)
    return (
      <div>
        {this.props.requesting ? (
          <div>Loading...</div>
        ) : (
         this.props.schools.map(school => (
          <SchoolCard school = {school} handleUserLogin = {this.props.handleUserLogin} />
         ))
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    schools: state.schoolsReducer.schools,
    requesting: state.schoolsReducer.requesting

  }

}

export default connect(mapStateToProps, {fetchSchools})(Home)
