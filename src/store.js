'use strict'

// Redux
import { applyMiddleware, combineReducers, createStore } from 'redux'


// Navigation
import { NavigatorTabOne } from './navigationConfiguration'

// Middleware


export default createStore(
  combineReducers({

    tabOne: (state,action) => NavigatorTabOne.router.getStateForAction(action,state),

      })
)
