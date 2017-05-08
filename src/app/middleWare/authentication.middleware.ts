import {
  TRY_TO_LOGIN, LOGIN_SUCCESS, TRY_TO_REGISTER,
  REGISTRATION_SUCCESS, LOGIN_ERROR, REGISTRATION_ERROR
} from '../authentication/authentication.service';



export const authMdl = store => next => action => {
  if (action.type === TRY_TO_LOGIN) {
    setTimeout(() => {
      // Get data from db and see if there is no errors.
      const userTryingToLogIn = action.payload.user;
      const usersList = action.payload.usersList;
      const userExist = usersList.find( user => {
        return ((userTryingToLogIn.email === user.email) && (userTryingToLogIn.password === user.password));
      });
      if (userExist) {
        next({type: LOGIN_SUCCESS, payload: action.payload.user});
      } else {
        next({type: LOGIN_ERROR, payload: action.payload.user});
      }
    }, 3000);

    return next(action);
  }


  if (action.type === TRY_TO_REGISTER) {
    setTimeout(() => {
      // Get data from db and see if there is no errors.
      const userTryingToRegister = action.payload.registrationDetails;
      const usersList = action.payload.usersList;
      const userAlreadyRegistered = usersList.find( user => {
        return (userTryingToRegister.email === user.email);
      });
      if (userAlreadyRegistered) {
        next({type: REGISTRATION_ERROR, payload: action.payload.registrationDetails});
      } else {
        usersList.push({name: userTryingToRegister.name ,
          email: userTryingToRegister.email ,
          password: userTryingToRegister.passwords.password});
        next({type: REGISTRATION_SUCCESS, payload: action.payload.registrationDetails});
      }
    }, 3000);
    return next(action);
  }

  return next(action);

};
