import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './layouts/web/home/code/home-page.component';
import { AboutPageComponent } from './layouts/web/about/code/about-page.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, AboutPageComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    SharedModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
