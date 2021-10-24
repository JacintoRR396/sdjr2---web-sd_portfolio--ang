import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { ThemesModule } from './themes/themes.module';
import { SidebarModule } from './shared/sidebar.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemesModule,

    SidebarModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
