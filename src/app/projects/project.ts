
export class Project {

  projectName: string;
  startDate: Date;
  endDate?: Date;
  spent: number;
  remaning?: number;
  done: boolean;
  notes?: string;
  timeSpentToday: any;

  constructor(projectName: string , startDate?: Date , endDate?: Date , notes?: string) {

    this.projectName = projectName;

    if (typeof startDate === 'undefined') {
      this.startDate = new Date();
    } else {
      this.startDate = startDate;
    }

    this.spent = 0;
    if (typeof endDate !== 'undefined') {
      this.endDate = endDate;
      this.remaning = this.endDate.valueOf() - this.startDate.valueOf();
    }

    this.done = false;

    if (typeof notes !== 'undefined') {
      this.notes = notes;
    }

    this.timeSpentToday = 0;

  }
}
