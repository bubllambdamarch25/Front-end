import { combineReducers } from 'redux';
import { schoolsReducer } from './schoolsReducer';
import { userReducer } from './usersReducer';

export default combineReducers({schoolsReducer, userReducer})