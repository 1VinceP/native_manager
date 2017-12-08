import { combineReducers } from 'redux';
import authReducer from './authReducer';

// These will all be properties on state
export default combineReducers({
    auth: authReducer
})