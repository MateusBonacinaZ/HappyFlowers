import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnectionErrorPage } from './connection-error.page';

const routes: Routes = [
  {
    path: '',
    component: ConnectionErrorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectionErrorPageRoutingModule {}
