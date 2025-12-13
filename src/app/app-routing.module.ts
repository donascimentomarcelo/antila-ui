import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'manual-entry',
    loadChildren: () =>
      import('./pages/manual-entry/manual-entry.module').then(
        (m) => m.ManualEntryModule
      ),
  },
  {
    path: '',
    redirectTo: '/manual-entry',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
