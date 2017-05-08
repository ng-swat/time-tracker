import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {CustomValidators} from '../../customValidators/custom-validators';
import {select} from '@angular-redux/store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public auth: AuthenticationService;
  // public passwords: FormGroup;

  @select('registration') public registration;  // choose somthing from the *store* (insted of doing a get method...)

  constructor(fb: FormBuilder , auth: AuthenticationService) {

    this.auth = auth;
    this.registerForm = fb.group({
      name: new FormControl('' , Validators.required) ,
      companyName: new FormControl('' , Validators.required) ,
      phone: new FormControl('') ,
      email: new FormControl('' , [Validators.required , Validators.email]) ,
      passwords: fb.group({
        password: new FormControl('' , Validators.required) ,
        confirmPassword: new FormControl('' , Validators.required)
      }, CustomValidators.comparePasswordsValidator) ,
      extraNotes: new FormControl('') ,
      acceptTerms: new FormControl(false , Validators.pattern('true'))
    });
  }

  get name() {
    return this.registerForm.get('name');
  }

  get companyName() {
    return this.registerForm.get('companyName');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get passwords() {
    return this.registerForm.get('passwords');
  }

  get extraNotes() {
    return this.registerForm.get('extraNotes');
  }

  get acceptTerms() {
    return this.registerForm.get('acceptTerms');
  }

  tryRegister() {
    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value);
    } else {
      console.log('The registration form is not valid !');
    }
  }

  ngOnInit() {
  }

}
