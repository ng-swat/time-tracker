import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';

import { AppComponent } from './app.component';
import {AuthenticationModule} from './authentication/authentication.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialUtillModule} from './material-utill/material-utill.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {RouterModule} from '@angular/router';
import {TimeTrackerRouter} from './router/time-tracker-router';
import {ManageModule} from './manage/manage.module';
import {HomeModule} from './home/home.module';
import {ProjectsModule} from './projects/projects.module';
import {ProfileModule} from './profile/profile.module';
import {ReportsModule} from './reports/reports.module';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import {combineReducers} from 'redux';
import {authReducer} from './authentication/authentication.reducer';
import {authMdl} from './middleWare/authentication.middleware';
import createLogger from 'redux-logger';


const rootReducer = combineReducers({
  user: authReducer ,
  registration: authReducer
});



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgReduxModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    MaterialUtillModule,
    DashboardModule,
    RouterModule.forRoot(TimeTrackerRouter),
    ManageModule,
    HomeModule,
    ProjectsModule,
    ProfileModule,
    ReportsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<any>) {
    ngRedux.configureStore(rootReducer, {} , [authMdl , createLogger]);
  }

}



