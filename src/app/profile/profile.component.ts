import { Component, OnInit } from '@angular/core';
import {ProfileService} from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profileService: ProfileService;
  public profileData = [];

  constructor(profileService: ProfileService) {
    this.profileService = profileService;
  }

  ngOnInit() {
    this.profileData = this.profileService.GetContainerGridSize();
  }

}
