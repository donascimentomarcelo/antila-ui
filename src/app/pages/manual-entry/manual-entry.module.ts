import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualEntryRoutingModule } from './manual-entry-routing.module';
import { ManualEntryComponent } from './manual-entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    ManualEntryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ManualEntryRoutingModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    provideNgxMask(),
    { provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class ManualEntryModule { }
