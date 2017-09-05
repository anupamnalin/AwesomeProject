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
      .catch(() => createAccount(dispatch, email, password));
      ToastAndroid.show('You are now logged in.', ToastAndroid.LONG)

  };

  export const createAccount = ( email, password) =>
  (dispatch) => {
  dispatch({
    type: ActionsTypes.REGISTRATION_USER_START,
  });
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch));
        ToastAndroid.show('Successfully Registered', ToastAndroid.LONG)

      };

  const loginUserSuccess = (dispatch, user) => {
    dispatch({
      type: ActionsTypes.LOGIN_USER_SUCCESS,
      payload: user
    });

    navigateTo(dispatch, 'Home', true);
  };

  const logoutUserSuccess = (dispatch) => {
    dispatch({
      type: ActionsTypes.LOGOUT_USER_SUCCESS
    });

    navigateTo(dispatch, 'LoginForm', true);
  };

  const loginUserFail = (dispatch) =>
    dispatch({
      type: ActionsTypes.LOGIN_USER_FAIL,
    });

  export const logout = () =>
    () => {
      firebase.auth().signOut();
    };
