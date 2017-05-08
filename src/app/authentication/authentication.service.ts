import { Injectable } from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../app.state';
import {AbstractControl, FormGroup} from "@angular/forms";

// Firing all the actions of authentication (Login , Register , Forget Password , Logout).

export const TRY_TO_LOGIN = 'TRY_TO_LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const TRY_TO_REGISTER = 'TRY_TO_REGISTER';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_ERROR = 'REGISTRATION_ERROR';

@Injectable()
export class AuthenticationService {

  usersList = [
    { permissionGroup: 'user' , name: 'Benor Biton' , email: 'ben@gmail.com' , password: '111'} ,
    { permissionGroup: 'user' , name: 'Try1' , email: 'try1@gmail.com' , password: '111'} ,
    { permissionGroup: 'user' , name: 'Try22222' , email: 'try2@gmail.com' , password: '111'} ,
  ];

  constructor(private store: NgRedux<AppState>) {

  }

  // Firing a login action , the reducer should catch it.
  login(user) {
    this.store.dispatch({
      type: TRY_TO_LOGIN ,
      payload: {user: user , usersList: this.usersList}
    });
  }

  // Firing a logout action , the reducer should catch it.
  logout() {
    this.store.dispatch({
      type: LOGOUT
    });
  }

  register(registrationDetails) {
    this.store.dispatch({
      type: TRY_TO_REGISTER ,
      payload: {registrationDetails: registrationDetails , usersList: this.usersList}
    });
  }


}
