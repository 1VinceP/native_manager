import {
    EMPLOYEE_UPDATE
} from '../types'

export function employeeUpdate( { prop, value } ) {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
};

export function employeeCreate( { name, phone, shift } ) {
    console.log( name, phone, shift )
}