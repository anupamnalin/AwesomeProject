'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import  RootReducer  from './reducers/rootReducer'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'


// Navigation

// Middleware

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
    ),
  );
  return createStore(RootReducer, initialState, enhancer);
}

const store = configureStore({});

export default store
