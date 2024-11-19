import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404PageComponent } from './shared/pages/app-error-404-page/app-error-404-page.component';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import( './layouts/admin/admin.module' ).then( m => m.AdminModule ) },
  { path: 'auth', loadChildren: () => import( './layouts/auth/auth.module' ).then( m => m.AuthModule ) },
  //{ path: 'dashboard', loadChildren: () => import( './layouts/auth/auth.module' ).then( m => m.AuthModule ) },
  { path: 'web', loadChildren: () => import( './layouts/web/web.module' ).then( m => m.WebModule ) },
  { path: '', redirectTo: '/web', pathMatch: 'full' },
  { path: '**', component: Error404PageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
