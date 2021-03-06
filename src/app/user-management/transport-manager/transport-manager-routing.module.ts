import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportManagerFormComponent } from './transport-manager-form/transport-manager-form.component';
import { TransportManagerListComponent } from './transport-manager-list/transport-manager-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: TransportManagerListComponent
  },
  {
    path: 'add',
    component: TransportManagerFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportManagerRoutingModule { }