import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { View, Text } from 'react-native';
import { employeeUpdate, employeeSave, employeeDelete } from '../redux/actions/actionIndex';
import { Card, CardSection, Button, ConfirmModal } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    constructor() {
        super();

        this.state = {
            showModal: false
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

    onFirePress() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    onConfirmAccept() {
        const { uid } = this.props.employee

        this.props.employeeDelete( uid )
    }

    onConfirmDecline() {

    }

    render() {
        return (
            <Card>
                <EmployeeForm />

                <CardSection>
                    <Button color='green' pressed={() => this.onButtonPress()}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button color='orange' pressed={() => this.onTextPress()}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button color='red' pressed={() => this.onFirePress()}>
                        Fire Employee
                    </Button>
                </CardSection>

                <ConfirmModal visible={this.state.showModal}
                              onAccept={() => this.onConfirmAccept()}
                              onDecline={() => this.onFirePress()}
                >
                    Are you sure you want to fire {this.props.employee.name}?
                </ConfirmModal>
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

export default connect( mapStateToProps, { employeeUpdate, employeeSave, employeeDelete } )(EmployeeEdit);