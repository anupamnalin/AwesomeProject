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

// async doLogin(email, password) {
//   try {
//         await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
//         this.setState({showLogin: false,
//         email: '',
//         password: '',
//         notLogged: false});
//         ToastAndroid.show('You are now logged in.', ToastAndroid.LONG)
//         } catch (error) {
//             this.setState({response: error.toString()})
//             ToastAndroid.show('Please enter correct email and password combination.', ToastAndroid.LONG)
//         }
// }

export const Login_Success = 'Login_Success';
export const Login_Fail = 'Login_Fail';
export const SignUp_Success = 'SignUp_Success';
export const SignUp_Fail = 'SignUp_Fail';

export function signUpSuccess(userObject) {
	return { type: SignUp_Success, userObject };
}

export function signUpFail(error) {
	return { type: SignUp_Fail, error };
}

export function attemptSignUp(email, password, displayName) {
  return (dispatch) => {
    dispatch(clickedSignUp());

    $.ajax({
			type: 'POST',
			url: '/signup',
			data: {email, password, displayName} })
			.done(function(data) {
				if (data.error){
					dispatch(signUpFail(data.error));
				} else {
					dispatch(signUpSuccess(data));
				}
			})
			.fail(function(a,b,c,d) {
			  // console.log('failed to signup',a,b,c,d);
			  dispatch(signUpFail("TODO find the error..."));
			});
  }
}


export function loginSuccess(userObject) {
	return { type: Login_Success, userObject };
}
export function loginFail(error) {
	return { type: Login_Fail, error };
}

// export function attemptLogin(email, password) {
//    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
// }

export function attemptLogin(email, password) {
  console.log('login called');
  return (dispatch) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('loginSuccess')
        dispatch(loginSuccess(data))
      })
      .catch(() => {
        console.log('failed to sign in');
        return;
      });
  };
}
