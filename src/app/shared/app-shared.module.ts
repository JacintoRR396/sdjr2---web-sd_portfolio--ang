import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { BaseMessagesComponent } from './components/app-base-messages/app-base-messages.component';
import { BaseSpinnerComponent } from './components/app-base-spinner/app-base-spinner.component';
import { LazyImageComponent } from './components/app-lazy-image/code/app-lazy-image.component';
import { SearchBoxComponent } from './components/app-search-box/app-search-box.component';
import { Error404PageComponent } from './pages/app-error-404-page/app-error-404-page.component';

import { HighlightedContainerDirective } from './directives/app-highlighted-container.directive';

import { LoaderInterceptor } from './interceptors/app-loader.interceptor';

import { PathLoaderLazyImagePipe } from './components/app-lazy-image/pipes/app-path-loader-lazy-image.pipe';
import { EllipsisPipe } from './pipes/app-ellipsis.pipe';

@NgModule({
  declarations: [
    BaseMessagesComponent,
    BaseSpinnerComponent,
    LazyImageComponent,
    PathLoaderLazyImagePipe,
    SearchBoxComponent,
    Error404PageComponent,
    HighlightedContainerDirective,
    EllipsisPipe,
  ],
  imports: [CommonModule],
  exports: [
    BaseMessagesComponent,
    BaseSpinnerComponent,
    LazyImageComponent,
    SearchBoxComponent,
    Error404PageComponent,
    HighlightedContainerDirective,
    EllipsisPipe
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  }]
})
export class AppSharedModule {}
