import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ManageComponent],
  exports: [ManageComponent]
})
export class ManageModule { }
