import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { BSBtnComponent } from './components/bootstrap/app-bs-btn/app-bs-btn.component';
import { BSFormInputComponent } from './components/bootstrap/app-bs-form-input/app-bs-form-input.component';
import { BaseMessagesComponent } from './components/app-base-messages/app-base-messages.component';
import { BaseSpinnerComponent } from './components/app-base-spinner/app-base-spinner.component';
import { LazyImageComponent } from './components/app-lazy-image/code/app-lazy-image.component';
import { SearchBoxComponent } from './components/app-search-box/app-search-box.component';
import { Error404PageComponent } from './pages/app-error-404-page/app-error-404-page.component';

import { HighlightedContainerDirective } from './directives/app-highlighted-container.directive';

import { LoaderInterceptor } from './interceptors/app-loader.interceptor';

import { PathLoaderLazyImagePipe } from './components/app-lazy-image/pipes/app-path-loader-lazy-image.pipe';
import { EllipsisPipe } from './pipes/app-ellipsis.pipe';
import { SafeHtmlPipe } from './pipes/app-safe-html.pipe';
import { SafeUrlPipe } from './pipes/app-safe-url.pipe';
import { OnlyOneErrorValidatorPipe } from './pipes/app-only-one-error-validator.pipe';

@NgModule({
  declarations: [
    BSBtnComponent,
    BSFormInputComponent,
    BaseMessagesComponent,
    BaseSpinnerComponent,
    LazyImageComponent,
    PathLoaderLazyImagePipe,
    SearchBoxComponent,
    Error404PageComponent,
    HighlightedContainerDirective,
    EllipsisPipe,
    SafeHtmlPipe,
    SafeUrlPipe,
    OnlyOneErrorValidatorPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    BSBtnComponent,
    BSFormInputComponent,
    BaseMessagesComponent,
    BaseSpinnerComponent,
    LazyImageComponent,
    SearchBoxComponent,
    Error404PageComponent,
    HighlightedContainerDirective,
    EllipsisPipe,
    SafeHtmlPipe,
    SafeUrlPipe,
    OnlyOneErrorValidatorPipe,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderInterceptor,
    multi: true
  }]
})
export class AppSharedModule {}
