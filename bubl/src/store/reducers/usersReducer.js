import * as actions from '../actions/actions';

const initialStateUser = {
    user: [],
    requesting: false,
    error: null,
    id: null
}

export const userReducer = (state = initialStateUser, action = {}) => {
    switch (action.type) {
        case actions.REGISTER_USER:
        console.log(action);
            return {...state, requesting: true};
        case actions.REGISTER_USER_SUCCESS:
        console.log(action);
            return {...state, requesting: false, error: null, user: [ action.payload ]};
        case actions.REGISTER_USER_FAILURE:
        console.log(action);
            return {...state, requesting: false, error: action.payload.err};
        case actions.LOGIN_USER:
        console.log(action);
            return {...state, requesting: true};
        case actions.LOGIN_USER_SUCCESS:
        console.log(action);
            return {...state, requesting: false, error: null, user: [ action.payload ]};
        case actions.LOGIN_USER_FAILURE:
        console.log(action);
            return {...state, requesting: false, error: action.payload.err};
        default:
            return state
    }
}