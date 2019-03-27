import axios from 'axios';

const Url = 'https://bublmarch25.herokuapp.com'

export const GET_SCHOOL = 'GET_SCHOOL';
export const GET_SCHOOL_SUCCESS = 'GET_SCHOOL_SUCCESS';
export const GET_SCHOOL_FAILURE = 'GET_SCHOOL_FAILURE';

export const fetchSchools = () => dispatch => {
    dispatch({type: GET_SCHOOL})
    axios.get(`${Url}/api/schools`)
    .then(({data}) => {
        console.log(data);
        
        dispatch({type: GET_SCHOOL_SUCCESS, payload: data})
    })
    .catch(err => dispatch({type: GET_SCHOOL_FAILURE, payload: err}))
}