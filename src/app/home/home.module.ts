
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {MaterialUtillModule} from '../material-utill/material-utill.module';
import {RouterModule} from '@angular/router';
import {TimeTrackerRouter} from '../router/time-tracker-router';

@NgModule({
  imports: [
    CommonModule,
    MaterialUtillModule,
    RouterModule.forRoot(TimeTrackerRouter)
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
