import { Injectable } from '@angular/core';
import {Project} from '../project';

@Injectable()
export class MyProjectsServiceService {

  constructor() { }

  GetClients(): string[] {
    return ['Company Name' , 'Start Date' , 'End Date', 'Spent' , 'Remaning' , 'Notes' , 'Time Spent Today'];
  }

  GetProjectsDetailes(): Project[] {
    return [
      new Project('TimeTracker', new Date('2017-04-29T00:00:00') , new Date('2017-05-10T00:00:00') , 'notes of TimeTracker'),
      new Project('SiteOmat', new Date('2012-11-16T00:00:00') ,  undefined , 'notes of siteomat')
    ];
  }

}
