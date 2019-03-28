import axios from 'axios';

const Url = 'https://bublmarch25.herokuapp.com'

export const GET_SCHOOL = 'GET_SCHOOL';
export const GET_SCHOOL_SUCCESS = 'GET_SCHOOL_SUCCESS';
export const GET_SCHOOL_FAILURE = 'GET_SCHOOL_FAILURE';

export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const fetchSchools = () => dispatch => {
    dispatch({type: GET_SCHOOL})
    axios.get(`${Url}/api/schools`)
    .then(({data}) => {
        console.log(data);
        
        dispatch({type: GET_SCHOOL_SUCCESS, payload: data})
    })
    .catch(err => dispatch({type: GET_SCHOOL_FAILURE, payload: err}))
}

export const handleUserAuth = (userObj) => dispatch => {
    dispatch({type: REGISTER_USER})
    axios.post(`${Url}/auth/register`, (userObj))
    .then(({data}) => {
        console.log(data);
        
        dispatch({type: REGISTER_USER_SUCCESS, payload: data})
    })
    .catch(err => dispatch({type: REGISTER_USER_FAILURE, payload: err}))
}

export const login = (userObj) => dispatch => {
    dispatch({type: LOGIN_USER})
    axios.post(`${Url}/auth/register`, (userObj))
    .then(({data}) => {
        console.log(data);
        
        dispatch({type: LOGIN_USER_SUCCESS, payload: data})
    })
    .catch(err => dispatch({type: LOGIN_USER_FAILURE, payload: err}))
}