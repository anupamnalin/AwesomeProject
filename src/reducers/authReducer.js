import * as ActionsTypes from '../actions/types';

const defaultStartState = { isLoggedIn: false,
                            userObject: null,
                            error: null
                          }

export function updateUserInfo(userAuthState = defaultStartState , action) {
  console.log("updateUserInfo called")
  console.log("userAuthState=", userAuthState)
  switch (action.type){

    case ActionsTypes.LOGIN_USER_SUCCESS:
      return Object.assign({}, userAuthState, {
        isLoggedIn: true,
        userObject: action.payload,
        error: null
      });

    case ActionsTypes.LOGIN_USER_FAIL:
      return Object.assign({}, userAuthState, {
        isLoggedIn: false,
        error: action.error
      });

      return  Object.assign({}, defaultStartState);

    default:
      return userAuthState;
  }
}
