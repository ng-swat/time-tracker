import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { NewProjectsComponent } from './new-projects/new-projects.component';
import { ProjectsComponent } from './projects.component';
import {MaterialUtillModule} from '../material-utill/material-utill.module';
import {RouterModule} from '@angular/router';
import {TimeTrackerRouter} from '../router/time-tracker-router';
import {MyProjectsServiceService} from './my-projects/my-projects-service.service';
import {ReactiveFormsModule} from '@angular/forms';
import { MinutesToHourFormatPipe } from './minutes-to-hour-format.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialUtillModule,
    RouterModule.forRoot(TimeTrackerRouter),
    ReactiveFormsModule
  ],
  declarations: [MyProjectsComponent, NewProjectsComponent, ProjectsComponent, MinutesToHourFormatPipe],
  entryComponents: [ProjectsComponent],
  exports: [ProjectsComponent],
  providers: [MyProjectsServiceService]
})
export class ProjectsModule { }
