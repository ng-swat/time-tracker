import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MaterialUtillModule} from '../material-utill/material-utill.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialUtillModule,
    RouterModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
