import * as actions from '../actions/actions';

const initialStateSchool = {
    schools: [],
    requesting: false,
    error: null,
    id: null
}

export const schoolsReducer = (state = initialStateSchool, action = {}) => {
    switch (action.type) {
        case actions.GET_SCHOOL:
        console.log(action);
            return {...state, requesting: true};
        case actions.GET_SCHOOL_SUCCESS:
        console.log(action);
            return {...state, requesting: false, error: null, schools: [...action.payload ]};
        case actions.GET_SCHOOL_FAILURE:
        console.log(action);
            return {...state, requesting: false, error: action.payload.err};
        default:
            return state
    }
}
