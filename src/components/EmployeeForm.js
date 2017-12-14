import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common/index';
import { employeeUpdate, employeeCreate } from '../redux/actions/actionIndex';

class EmployeeForm extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        const days = [ 'None', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

        let mappedDays = days.map( ( day, i ) => {
            return (
                <Picker.Item key={i} label={day} value={day} />
            )
        } )
        
        return (
            <View>
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
            </View>
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

export default connect( mapStateToProps, { employeeUpdate, employeeCreate } )(EmployeeForm);