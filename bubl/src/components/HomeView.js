import React, { Component } from 'react'
import  { connect } from "react-redux";
import { fetchSchools} from '../store/actions/actions';
import SchoolCard from './SchoolCard';

class Home extends Component {
  constructor() {
    super()
    this.state = {schools: []}
  }

  componentDidMount() {
    this.props.fetchSchools();
  }

  render() {
      console.log(this.props.schools)
    return (
      <div>
        {this.props.requesting ? (
          <div>Loading...</div>
        ) : (
         this.props.schools.map(school => (
          <SchoolCard school = {school} />
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
