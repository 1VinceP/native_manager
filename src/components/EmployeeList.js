import React, { Component } from 'react';
import { View, Text, ListView, BackHandler, ToastAndroid, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import ListItem from './ListItem';
import { employeesFetch } from '../redux/actions/actionIndex';

class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeesFetch()

        this.createDataSource( this.props )
    }
    
    componentWillReceiveProps( nextProps ) {

        this.createDataSource( nextProps )

    }

    createDataSource( { employees } ) {
        const ds = new ListView.DataSource({
            rowHasChanged: ( r1, r2 ) => r1 != r2
        })

        this.dataSource = ds.cloneWithRows( employees )
    }

    renderRow( 
        employee ) {
        return <ListItem employee={employee} />
    }

    // componentDidMount() {
    //     BackHandler.addEventListener( 'hardwareBackPress', this.handleBackButton )
    // }

    // componentWillUnmount() {
    //     BackHandler.removeEventListener( 'hardwareBackPress', this.handleBackButton )
    // }

    // handleBackButton() {
    //     return true
    // }

    render() {
        return (
            <View>
                <StatusBar hidden={true} />
                
                <ListView enableEmptySections
                          dataSource={this.dataSource}
                          renderRow={this.renderRow}
                />
            </View>
        )
    }
}

function mapStateToProps( state ) {
    const employees = _.map( state.employees, ( val, uid ) => {
        return { ...val, uid }
    } )

    return {
        employees
    }
}

export default connect( mapStateToProps, { employeesFetch } )(EmployeeList);