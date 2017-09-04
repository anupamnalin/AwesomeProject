import { combineReducers } from 'redux';
import { NavigatorTabOne } from '../navigationConfiguration'
import {updateUserInfo} from './authReducer'

const RootReducer = combineReducers({
  tabOne: (state,action) => NavigatorTabOne.router.getStateForAction(action,state),
  updateUserInfo
});

export default RootReducer;
