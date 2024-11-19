import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WebLayoutComponent } from './layout/web-layout.component';
import { WebHomePageComponent } from './pages/home/code/web-home-page.component';
import { WebAboutPageComponent } from './pages/about/code/web-about-page.component';
import { WebQualificationPageComponent } from './pages/qualification/code/web-qualification-page.component';
import { WebServicesPageComponent } from './pages/services/code/web-services-page.component';
import { WebPortfolioPageComponent } from './pages/portfolio/code/web-portfolio-page.component';
import { WebTestimonialsPageComponent } from './pages/testimonials/code/web-testimonials-page.component';
import { WebContactPageComponent } from './pages/contact/code/web-contact-page.component';

const routes: Routes = [
  { path: '', component: WebLayoutComponent, children: [
      { path: 'home', component: WebHomePageComponent },
      { path: 'about-me', component: WebAboutPageComponent },
      { path: 'qualification', component: WebQualificationPageComponent },
      { path: 'services', component: WebServicesPageComponent },
      { path: 'portfolio', component: WebPortfolioPageComponent },
      { path: 'testimonials', component: WebTestimonialsPageComponent },
      { path: 'contact', component: WebContactPageComponent },
      { path: '**', redirectTo: 'home' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
