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

import { NAVIGATION_ROUTES } from '../../models/navigation-routes.model';

const navRoutes = NAVIGATION_ROUTES;
const routes: Routes = [
  { path: '', component: WebLayoutComponent, children: [
      { path: navRoutes.web.home, component: WebHomePageComponent },
      { path: navRoutes.web.aboutMe, component: WebAboutPageComponent },
      { path: navRoutes.web.qualification, component: WebQualificationPageComponent },
      { path: navRoutes.web.services, component: WebServicesPageComponent },
      { path: navRoutes.web.portfolio, component: WebPortfolioPageComponent },
      { path: navRoutes.web.testimonials, component: WebTestimonialsPageComponent },
      { path: navRoutes.web.contact, component: WebContactPageComponent },
      { path: '', redirectTo: navRoutes.web.home, pathMatch: 'full' },
      { path: '**', redirectTo: navRoutes.web.home },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
