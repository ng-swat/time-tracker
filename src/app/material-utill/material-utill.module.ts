import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdDialogModule, MdIconModule, MdInputModule,
  MdSelectModule,
  MdSidenavModule
} from '@angular/material';

import 'hammerjs';
import {ButtonModule, CheckboxModule, ToggleButtonModule} from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdSidenavModule,
    MdCardModule,
    MdIconModule,
    MdSelectModule,
    MdDialogModule,
    MdChipsModule,
    CheckboxModule, // temporary
    ButtonModule, // temporary
    ToggleButtonModule // temporary
  ],
  declarations: [],
  exports: [BrowserAnimationsModule,
    NoopAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdSidenavModule,
    MdCardModule,
    MdIconModule,
    MdSelectModule,
    MdDialogModule,
    MdChipsModule,
    CheckboxModule, // temporary
    ButtonModule, // temporary
    ToggleButtonModule // temporary
  ]
})
export class MaterialUtillModule {
}
