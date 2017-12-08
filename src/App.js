import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { FIREBASE_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_DB_URL, FIREBASE_PROJECT_ID, FIREBASE_MESSAGE_SENDER_ID } from 'react-native-dotenv';

import reducers from './redux/reducers/reducerIndex';
import { StatusBar, Header } from './components/common/index';
import LoginForm from './components/LoginForm'

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: FIREBASE_KEY,
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: FIREBASE_DB_URL,
      projectId: FIREBASE_PROJECT_ID,
      storageBucket: '',
      messagingSenderId: FIREBASE_MESSAGE_SENDER_ID
    })
  }

  render() {
    const store = createStore( reducers, {}, applyMiddleware(ReduxThunk) )

    return (
      <Provider store={store}>
        <View>
          <StatusBar color={'green'}/>
          <Header color={'green'} title={'Manager'}/>

          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;