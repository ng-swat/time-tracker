import { Injectable } from '@angular/core';
import {Project} from './project';

@Injectable()
export class MyProjectsServiceService {

  constructor() { }

  GetClients(): string[] {
    return ['Company Name' , 'Start Date' , 'End Date', 'Spent' , 'Remaning' , 'Notes' , 'Time Today'];
  }

  GetProjectsDetailes(): Project[] {
    return [
      new Project('TimeTracker', undefined , 'notes of TimeTracker'),
      new Project('SiteOmat', undefined , 'notes of siteomat')
    ];
  }

}
