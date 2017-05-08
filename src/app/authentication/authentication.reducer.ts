import {
  TRY_TO_LOGIN, LOGIN_SUCCESS, LOGOUT, TRY_TO_REGISTER, REGISTRATION_SUCCESS,
  LOGIN_ERROR
} from './authentication.service';


export function authReducer (state = {}, action) {
  switch (action.type) {
    case TRY_TO_LOGIN:
      return Object.assign({} , state , {pending: true});
    case LOGIN_SUCCESS:
      return Object.assign({} , state , {user: action.payload , pending: false , permissionGroup: 'user'});
    case LOGIN_ERROR:
      return Object.assign({} , state , {user: null , pending: false , errors: 'The user not exist.'});
    case LOGOUT:
      return Object.assign({} , state , {user: null});


    case TRY_TO_REGISTER:
      return Object.assign({} , state , {pending: true});
    case REGISTRATION_SUCCESS:
      return Object.assign({} , state , {registration: action.payload , pending: false , errors: 'User already exists'});
    default: // If no action catched , return the current state (also if the login/registration fails)
      return state;
  }
}
