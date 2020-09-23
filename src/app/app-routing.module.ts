import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CDCComponent } from './cdc/cdc';
import {PrintLayoutComponent} from './print-layout/print-layout.component';

const routes: Routes = [
  { path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'cdc/:cdcIds', component: CDCComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
