import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

function RouterComponent() {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key='main'>
                <Scene key='employeeList' component={EmployeeList} title='Employee List' rightTitle='Add' onRight={() => Actions.employeeCreate()} initial />
                <Scene key='employeeCreate' component={EmployeeCreate} title='Create Employee' />
            </Scene>
            
            <Scene key='auth'>
                <Scene key='login' component={LoginForm} title='Please Log In' initial />
            </Scene>

        </Router>
    )
}

export default RouterComponent;