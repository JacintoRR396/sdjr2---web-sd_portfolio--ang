import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppSharedModule } from '../../shared/app-shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminSharedModule } from './shared/admin-shared.module';

import { AdminLayoutComponent } from './layout/admin-layout.component';

@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppSharedModule,
    AdminSharedModule
  ],
  exports: [AdminLayoutComponent]
})
export class AdminModule { }
