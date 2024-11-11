import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../../shared/app-shared.module';
import { WebRoutingModule } from './web-routing.module';
import { WebSharedModule } from './shared/web-shared.module';

import { WebLayoutComponent } from './layout/web-layout.component';
import { WebHomePageComponent } from './pages/home/code/web-home-page.component';
import { WebAboutPageComponent } from './pages/about/code/web-about-page.component';
import { WebQualificationPageComponent } from './pages/qualification/code/web-qualification-page.component';
import { WebServicesPageComponent } from './pages/services/code/web-services-page.component';
import { WebTestimonialsPageComponent } from './pages/testimonials/code/web-testimonials-page.component';
import { WebTestimonialComponent } from './pages/testimonials/components/web-testimonial/web-testimonial.component';
import { WebContactPageComponent } from './pages/contact/code/web-contact-page.component';
import { WebTestimonialsPathImgPipe } from './pages/testimonials/pipes/web-testimonials-path-img.pipe';


@NgModule({
  declarations: [
    WebLayoutComponent,
    WebHomePageComponent,
    WebAboutPageComponent,
    WebQualificationPageComponent,
    WebServicesPageComponent,
    WebTestimonialsPageComponent,
    WebTestimonialComponent,
    WebContactPageComponent,
    WebTestimonialsPathImgPipe
  ],
  imports: [
    CommonModule,
    AppSharedModule,
    WebRoutingModule,
    WebSharedModule
  ],
  exports: [WebLayoutComponent]
})
export class WebModule { }
