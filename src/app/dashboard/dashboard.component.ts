import { Component, OnInit } from '@angular/core';
import {select} from "@angular-redux/store";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @select('user') public user;  // choose somthing from the *store* (insted of doing a get method...)

  constructor() { }

  ngOnInit() {
  }

}
