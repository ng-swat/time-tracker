import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdCheckboxModule, MdInputModule, MdSidenavModule} from '@angular/material';

import 'hammerjs';




@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdSidenavModule,
    MdCardModule
  ],
  declarations: [],
  exports: [BrowserAnimationsModule,
            NoopAnimationsModule,
            MdButtonModule,
            MdCheckboxModule,
            MdInputModule,
            MdSidenavModule,
            MdCardModule
  ]
})
export class MaterialUtillModule { }
