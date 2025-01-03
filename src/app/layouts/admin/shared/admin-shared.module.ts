import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { AdminSidebarSharedComponent } from './components/admin-sidebar-shared/code/admin-sidebar-shared.component';

@NgModule({
  declarations: [
    AdminSidebarSharedComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    AdminSidebarSharedComponent,
  ]
})
export class AdminSharedModule { }
