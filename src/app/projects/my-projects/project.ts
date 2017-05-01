
import * as moment from 'moment';
export class Project {

  projectName: string;
  startDate: Date;
  endDate?: Date;
  spent: number;
  remaning?: number;
  done: boolean;
  notes?: string;
  timeForToday: any;

  constructor(projectName: string , endDate?: Date , notes?: string) {
    this.projectName = projectName;
    this.startDate = new Date();
    this.startDate.getDate();
    this.spent = 0;
    if (typeof endDate !== 'undefined') {
      this.endDate = endDate;
      this.remaning = this.endDate.valueOf() - this.startDate.valueOf();
    }
    this.done = false;
    if (typeof notes !== 'undefined') {
      this.notes = notes;
    }
    this.timeForToday = moment().format('LTS');

  }
}
