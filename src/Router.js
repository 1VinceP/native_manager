import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

function RouterComponent() {
    return (
        <Router>
            <Scene key='login' component={LoginForm} title='Please Log In' />
        </Router>
    )
}

export default RouterComponent;