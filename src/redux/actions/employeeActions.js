import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from '../types'

// Saves incoming changes to employee form
export function employeeUpdate( { prop, value } ) {

    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
};

// Adds new employee to database
export function employeeCreate( { name, phone, shift } ) {
    const { currentUser } = firebase.auth()

    return dispatch  => {
        firebase.database().ref( `/users/${currentUser.uid}/employees` )
            .push({ name, phone, shift })
            .then( () => {
                Actions.employeeList( { type: 'reset' } )
                dispatch({ type: EMPLOYEE_CREATE })
            } )
    }   
}

export function employeesFetch() {
    const { currentUser } = firebase.auth()

    return dispatch => {
        firebase.database().ref( `users/${currentUser.uid}/employees` )
            .on( 'value', snapshot => {
                dispatch({
                    type: EMPLOYEES_FETCH_SUCCESS,
                    payload: snapshot.val()
                })
            } )
    }
}

export function employeeSave( { name, phone, shift, id } ) {
    const { currentUser } = firebase.auth()

    return dispatch => {
        firebase.database().ref( `/users/${currentUser.uid}/employees/${id}` )
            .set({ name, phone, shift })
            .then( () => {
                Actions.employeeList({ type: 'reset' })
                dispatch({ type: EMPLOYEE_SAVE_SUCCESS })
            } )
    }
}