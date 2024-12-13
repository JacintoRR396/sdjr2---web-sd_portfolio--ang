import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './layout/admin-layout.component';

const routes: Routes = [
  { path: '', component: AdminLayoutComponent, children: [
      { path: 'testimonials', loadChildren: () => import( './pages/testimonials/admin-testimonials.module' ).then( m => m.AdminTestimonialsModule ) },
      //{ path: 'register', component: AuthRegisterPageComponent },
      //{ path: 'recover', component: AuthRecoverPageComponent },
      { path: '**', redirectTo: 'testimonials' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
