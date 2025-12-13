import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualEntryRoutingModule } from './manual-entry-routing.module';
import { ManualEntryComponent } from './manual-entry.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ManualEntryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ManualEntryRoutingModule
  ]
})
export class ManualEntryModule { }
