import React, { Component } from 'react';
import { Text, Picker } from 'react-native';
import { Card, CardSection, Input, Button } from './common/index';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../redux/actions/actionIndex';

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props

        this.props.EmployeeCreate({ name, phone, shift: shift || 'None' })
    }

    render() {
        const days = [ 'None', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]

        let mappedDays = days.map( ( day, i ) => {
            return (
                <Picker.Item key={i} label={day} value={day} />
            )
        } )

        return (
            <Card>
                <CardSection>
                    <Input label='Name'
                           placeholder='Jane'
                           value={this.props.name}
                           onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
                    />
                </CardSection>

                <CardSection>
                    <Input label='Phone'
                           placeholder='555-555-5555'
                           value={this.props.phone}
                           onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection style={{ flexDirection: 'column' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker selectedValue={this.props.shift}
                            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                            style={{ width: '75%', alignSelf: 'center' }}>
                        {mappedDays}
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button color='green' pressed={() => this.onButtonPress}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
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