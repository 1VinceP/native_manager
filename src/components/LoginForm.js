import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from '../redux/actions/actionIndex';
import { Card, CardSection, Input, Button } from './common/index';

class LoginForm extends Component {

    onEmailChange( text ) {
        this.props.emailChanged( text )
    }

    onPasswordChange( text ) {
        this.props.passwordChanged( text )
    }

    onButtonPress() {
        const { email, password } = this.props

        this.props.loginUser( { email, password } )
    }

    renderError() {
        if( this.props.error ) {
            return (
                <View style={{backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input label={'Email'}
                           placeholder={'user@email.com'}
                           onChangeText={(e) => this.onEmailChange(e)}
                           value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input label={'Password'}
                           placeholder={'password'}
                           onChangeText={(e) => this.onPasswordChange(e)}
                           secure={true}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    <Button color={'green'} pressed={() => this.onButtonPress()}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

function mapStateToProps( state ) {
    const { email, password, error } = state.auth;

    return {
        email,
        password,
        error
    };
}

export default connect( mapStateToProps,
    { emailChanged, passwordChanged, loginUser }
)(LoginForm);