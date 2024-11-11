import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404PageComponent } from './shared/pages/app-error-404-page/app-error-404-page.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import( './layouts/auth/auth.module' ).then( m => m.AuthModule ) },
  { path: 'web', loadChildren: () => import( './layouts/web/web.module' ).then( m => m.WebModule ) },
  { path: 'err-404', component: Error404PageComponent },
  { path: '', redirectTo: 'web', pathMatch: 'full' },
  { path: '**', redirectTo: 'err-404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
