import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManualEntryComponent } from './manual-entry.component';

const routes: Routes = [
  {
    path: '',
    component: ManualEntryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualEntryRoutingModule {}
