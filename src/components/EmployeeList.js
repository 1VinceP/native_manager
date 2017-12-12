import React, { Component } from 'react';
import { View, Text, BackHandler, ToastAndroid, StatusBar } from 'react-native';

class EmployeeList extends Component {

    componentDidMount() {
        BackHandler.addEventListener( 'hardwareBackPress', this.handleBackButton )
    }

    componentWillUnmount() {
        BackHandler.removeEventListener( 'hardwareBackPress', this.handleBackButton )
    }

    handleBackButton() {
        return true
    }

    render() {
        return (
            <View>
                <StatusBar hidden={true} />
                
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>
        )
    }
}

export default EmployeeList;