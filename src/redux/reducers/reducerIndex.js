import { combineReducers } from 'redux';
import authReducer from './authReducer';
import EmployeeFromReducer from './employeeFormReducer';

// These will all be properties on state
export default combineReducers({
    auth: authReducer,
    employeeForm: EmployeeFromReducer
})