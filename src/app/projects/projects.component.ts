import { Component, OnInit } from '@angular/core';
import {Project} from './project';
import {MyProjectsServiceService} from './my-projects/my-projects-service.service';
import {FormControl} from '@angular/forms';
import {MdDialog, MdDialogRef} from '@angular/material';
import {NewProjectsComponent} from './new-projects/new-projects.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public myTimerPointer;
  public timerRunning: FormControl;

  public projects: Project[];
  public myProjectsService: MyProjectsServiceService;
  public dialogRef: MdDialogRef<NewProjectsComponent>;
  public selectedProject: FormControl;
  public tickes = 0;


  constructor(myProjectsService: MyProjectsServiceService , public dialog: MdDialog) {

    this.myProjectsService = myProjectsService;
    this.projects = this.myProjectsService.GetProjectsDetailes();
    this.selectedProject = new FormControl();
    this.timerRunning = new FormControl(false);

  }


  runOrStopTimer() {
    console.log(this.timerRunning.value);
    if ( this.timerRunning.value === true) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  startTimer() {
    this.myTimerPointer = setInterval(() => {
      this.tickes++;
      console.log(this.tickes);
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.myTimerPointer);
  }

  openDialog() {
    this.dialogRef = this.dialog.open(NewProjectsComponent);
    // dialogRef.afterClosed().subscribe(result => {
    //   this.selectedOption = result;
    // });
  }

  ngOnInit() {
  }

}
