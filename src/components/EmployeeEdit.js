import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { View, Text } from 'react-native';
import { employeeUpdate, employeeSave } from '../redux/actions/actionIndex';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    componentWillMount() {
        _.each( this.props.employee, ( value, prop ) => {
            this.props.employeeUpdate( { prop, value } )
        } )
    }

    onButtonPress() {
        const { name, phone, shift } = this.props

        this.props.employeeSave( { name, phone, shift, id: this.props.employee.uid } )
    }

    onTextPress() {
        const { phone, shift } = this.props

        Communications.text( phone, `Your upcoming shift is on ${shift}` )
    }

    render() {
        return (
            <Card>
                <EmployeeForm />

                <CardSection>
                    <Button color='green' pressed={() => this.onButtonPress()}>
                        Save Changes
                    </Button>
                    <Button color='orange' pressed={() => this.onTextPress()}>
                        Text Schedule
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

function mapStateToProps( state ) {
    const { name, phone, shift } = state.employeeForm;

    return {
        name,
        phone,
        shift
    };
}

export default connect( mapStateToProps, { employeeUpdate, employeeSave } )(EmployeeEdit);