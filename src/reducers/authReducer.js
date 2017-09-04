import {   SignUp_Success, SignUp_Fail,
           Login_Success, Login_Fail,
         } from '../actions/authActions';

const defaultStartState = { isLoggedIn: false,
                            userObject: null,
                            error: null
                          }

export function updateUserInfo(userAuthState = defaultStartState , action) {
  switch (action.type){

    case Login_Success:
    case SignUp_Success:
      return Object.assign({}, userAuthState, {
        isLoggedIn: true,
        userObject: action.userObject,
        error: null
      });

    case Login_Fail:
    case SignUp_Fail:
      return Object.assign({}, userAuthState, {
        isLoggedIn: false,
        error: action.error
      });

      return  Object.assign({}, defaultStartState);

    default:
      return userAuthState;
  }
}
