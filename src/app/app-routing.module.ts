import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppError404PageSharedComponent } from './shared/pages/app-error-404-page-shared/app-error-404-page-shared.component';

const routes: Routes = [
  { path: 'web', loadChildren: () => import( './layouts/web/web.module' ).then( m => m.WebModule ) },
  { path: 'error-404', component: AppError404PageSharedComponent },
  { path: '', redirectTo: 'web', pathMatch: 'full' },
  { path: '**', redirectTo: 'error-404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
