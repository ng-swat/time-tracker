import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {select} from '@angular-redux/store';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public auth: AuthenticationService;
  public ifSubmitted: boolean;

  @select('user') public user;  // choose somthing from the *store* (insted of doing a get method...)

  constructor(fb: FormBuilder , auth: AuthenticationService) {
    this.auth = auth;
    this.loginForm = fb.group({
      email: new FormControl('' , Validators.required),
      password: new FormControl('' , Validators.required)
    });
    this.ifSubmitted = false;
  }

  get Email() {
    return this.loginForm.get('email');
  }

  get Password() {
    return this.loginForm.get('password');
  }

  tryLogin() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value);
    } else {
      console.log('The login form is not valid !');
    }
  }

  ngOnInit() {
  }

}
