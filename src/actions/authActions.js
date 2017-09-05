import navigateTo from './navigateTo';
import * as ActionsTypes from './types';
import { ToastAndroid } from 'react-native'

var firebase = require('firebase');
var config = {
  apiKey: "AIzaSyAdx__QxuulyUFzyUJ2O4VV-CokIrsPZPg",
  authDomain: "project-8793135885135970639.firebaseapp.com",
  databaseURL: "https://project-8793135885135970639.firebaseio.com",
  projectId: "project-8793135885135970639",
  storageBucket: "project-8793135885135970639.appspot.com",
  messagingSenderId: "867398835808"
};

if (!firebase.apps.length) {
var app = firebase.initializeApp(config);
}

export const attemptLogin = (email, password) =>
  (dispatch) => {
    dispatch({
      type: ActionsTypes.LOGIN_USER_START,
    });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch, email, password));
  };

  export const createAccount = ( email, password) =>
  (dispatch) => {
  dispatch({
    type: ActionsTypes.REGISTRATION_USER_START,
  });
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => registerUserFail(dispatch));

      };

  const loginUserSuccess = (dispatch, user) => {
    dispatch({
      type: ActionsTypes.LOGIN_USER_SUCCESS,
      payload: user
    });

    navigateTo(dispatch, 'Home', true);
    ToastAndroid.show('You are now logged in.', ToastAndroid.LONG)
  };

  const logoutUserSuccess = (dispatch) => {
    dispatch({
      type: ActionsTypes.LOGOUT_USER_SUCCESS
    });

    navigateTo(dispatch, 'LoginForm', true);
  };

  const registerUserFail = (dispatch) => {
    dispatch({
      type: ActionsTypes.REGISTER_USER_FAIL,
    });
    ToastAndroid.show('Please fill all the fields correctly to register', ToastAndroid.LONG)
  }

  const loginUserFail = (dispatch) => {
    dispatch({
      type: ActionsTypes.LOGIN_USER_FAIL,
    });
    ToastAndroid.show('Please enter correct email and password combination.', ToastAndroid.LONG)
  }

  export const logout = () =>
    () => {
      firebase.auth().signOut();
    };
