import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTestimonialsLayoutComponent } from './layout/admin-testimonials-layout.component';
import { AdminTestimonialsRoutingModule } from './admin-testimonials-routing.module';
import { AppSharedModule } from '../../../../shared/app-shared.module';
import { AdminTestimonialsListPageComponent } from './pages/list/admin-testimonials-list-page.component';
import { AdminTestimonialsDetailPageComponent } from './pages/details/admin-testimonials-detail-page.component';

@NgModule({
  declarations: [
    AdminTestimonialsLayoutComponent,
    AdminTestimonialsListPageComponent,
    AdminTestimonialsDetailPageComponent
  ],
  imports: [
    CommonModule,
    AppSharedModule,
    AdminTestimonialsRoutingModule
  ],
  exports: [AdminTestimonialsLayoutComponent]
})
export class AdminTestimonialsModule { }
