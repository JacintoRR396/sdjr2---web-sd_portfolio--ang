import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminTestimonialsLayoutComponent } from './layout/admin-testimonials-layout.component';
import { AdminTestimonialsListPageComponent } from './pages/list/admin-testimonials-list-page.component';
import { AdminTestimonialsDetailPageComponent } from './pages/details/admin-testimonials-detail-page.component';

const routes: Routes = [
  { path: '', component: AdminTestimonialsLayoutComponent, children: [
      { path: 'list', component: AdminTestimonialsListPageComponent },
      { path: 'detail/:id', component: AdminTestimonialsDetailPageComponent },
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminTestimonialsRoutingModule { }
