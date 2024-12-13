import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WebRoutingModule } from './web-routing.module';
import { AppSharedModule } from '../../shared/app-shared.module';
import { WebSharedModule } from './shared/web-shared.module';

import { WebLayoutComponent } from './layout/web-layout.component';
import { WebHomePageComponent } from './pages/home/code/web-home-page.component';
import { WebAboutPageComponent } from './pages/about/code/web-about-page.component';
import { WebQualificationPageComponent } from './pages/qualification/code/web-qualification-page.component';
import { WebServicesPageComponent } from './pages/services/code/web-services-page.component';
import { WebPortfolioPageComponent } from './pages/portfolio/code/web-portfolio-page.component';
import { WebTestimonialsPageComponent } from './pages/testimonials/code/web-testimonials-page.component';
import { WebTestimonialComponent } from './pages/testimonials/components/web-testimonial/web-testimonial.component';
import { WebContactPageComponent } from './pages/contact/code/web-contact-page.component';

@NgModule({
  declarations: [
    WebLayoutComponent,
    WebHomePageComponent,
    WebAboutPageComponent,
    WebQualificationPageComponent,
    WebServicesPageComponent,
    WebPortfolioPageComponent,
    WebTestimonialsPageComponent,
    WebTestimonialComponent,
    WebContactPageComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    AppSharedModule,
    WebSharedModule
  ],
  exports: [WebLayoutComponent]
})
export class WebModule { }
