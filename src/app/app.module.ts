import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';

import { AppComponent } from './app.component';
import {AuthenticationModule} from './authentication/authentication.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import {MaterialUtillModule} from './material-utill/material-utill.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {RouterModule} from '@angular/router';
import {TimeTrackerRouter} from './router/time-tracker-router';
import {ManageModule} from './manage/manage.module';
import {HomeModule} from './home/home.module';
import {ProjectsModule} from './projects/projects.module';
import {ProfileModule} from './profile/profile.module';
import {ReportsModule} from './reports/reports.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    MaterialUtillModule,
    DashboardModule,
    RouterModule,
    RouterModule.forRoot(TimeTrackerRouter),
    ManageModule,
    HomeModule,
    ProjectsModule,
    ProfileModule,
    ReportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



