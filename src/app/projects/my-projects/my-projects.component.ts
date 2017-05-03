import { Component, OnInit } from '@angular/core';
import {Project} from '../project';
import {MyProjectsServiceService} from './my-projects-service.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  public myProjectsService: MyProjectsServiceService;

  public clientsArr: string[];
  public projectDetailes: Project[];

  constructor(myProjectsService: MyProjectsServiceService) {

    this.myProjectsService = myProjectsService;
    this.clientsArr = this.myProjectsService.GetClients();
    this.projectDetailes = this.myProjectsService.GetProjectsDetailes();

  }

  ngOnInit() {
  }

}
