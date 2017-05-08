import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdDialogModule, MdGridListModule, MdIconModule,
  MdInputModule, MdProgressSpinnerModule,
  MdSelectModule,
  MdSidenavModule
} from '@angular/material';

import 'hammerjs';
import {
  ButtonModule, CheckboxModule, DataTableModule, InputTextModule, SharedModule,
  ToggleButtonModule
} from 'primeng/primeng';


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
    ToggleButtonModule, // temporary,
    DataTableModule,
    SharedModule,
    MdGridListModule,
    InputTextModule,
    MdProgressSpinnerModule
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
    ToggleButtonModule, // temporary
    DataTableModule,
    SharedModule,
    MdGridListModule,
    InputTextModule,
    MdProgressSpinnerModule
  ]
})
export class MaterialUtillModule {
}
