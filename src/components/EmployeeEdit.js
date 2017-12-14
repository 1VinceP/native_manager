import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { employeeUpdate } from '../redux/actions/actionIndex';
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

export default connect( mapStateToProps, { employeeUpdate } )(EmployeeEdit);