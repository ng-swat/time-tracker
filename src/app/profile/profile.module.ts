import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {MaterialUtillModule} from '../material-utill/material-utill.module';
import {ProfileService} from './profile.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialUtillModule
  ],
  declarations: [ProfileComponent],
  exports: [ProfileComponent],
  providers: [ProfileService]
})
export class ProfileModule { }
