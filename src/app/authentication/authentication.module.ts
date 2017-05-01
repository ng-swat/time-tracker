import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialUtillModule} from '../material-utill/material-utill.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialUtillModule
  ],
  declarations: [LoginComponent, RegisterComponent, ForgetPasswordComponent],
  exports: [LoginComponent, RegisterComponent, ForgetPasswordComponent]
})
export class AuthenticationModule { }
