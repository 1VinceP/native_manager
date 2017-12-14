import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common/index';
import { employeeUpdate, employeeCreate } from '../redux/actions/actionIndex';
import EmployeeForm from './EmployeeForm'

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props

        this.props.employeeCreate({ name, phone, shift: shift || 'None' })
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />

                <CardSection>
                    <Button color='green' pressed={() => this.onButtonPress()}>
                        Create
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

export default connect( mapStateToProps, { employeeUpdate, employeeCreate } )(EmployeeCreate);