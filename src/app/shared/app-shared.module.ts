import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { BSBtnComponent } from './components/bootstrap/app-bs-btn/code/app-bs-btn.component';
import { BSFormInputComponent } from './components/bootstrap/app-bs-form-input/code/app-bs-form-input.component';
import { BSImgLazyComponent } from './components/bootstrap/app-bs-img-lazy/code/app-bs-img-lazy.component';
import { PathImageLazyLoaderPipe } from './components/bootstrap/app-bs-img-lazy/pipes/app-path-image-lazy-loader.pipe';
import { BSModalMessagesComponent } from './components/bootstrap/app-bs-modal-messages/app-bs-modal-messages.component';

import { BaseSpinnerComponent } from './components/app-base-spinner/app-base-spinner.component';
import { SearchBoxComponent } from './components/app-search-box/app-search-box.component';
import { Error404PageComponent } from './pages/app-error-404-page/app-error-404-page.component';

import { HighlightedContainerDirective } from './directives/app-highlighted-container.directive';

import { LoaderInterceptor } from './interceptors/app-loader.interceptor';

import { EllipsisPipe } from './pipes/app-ellipsis.pipe';
import { SafeHtmlPipe } from './pipes/app-safe-html.pipe';
import { SafeUrlPipe } from './pipes/app-safe-url.pipe';
import { OnlyOneErrorValidatorPipe } from './pipes/app-only-one-error-validator.pipe';

@NgModule({
  declarations: [
    BSBtnComponent,
    BSFormInputComponent,
    BSImgLazyComponent,
    PathImageLazyLoaderPipe,
    BSModalMessagesComponent,
    BaseSpinnerComponent,
    SearchBoxComponent,
    Error404PageComponent,
    HighlightedContainerDirective,
    EllipsisPipe,
    SafeHtmlPipe,
    SafeUrlPipe,
    OnlyOneErrorValidatorPipe,
    BSImgLazyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    BSBtnComponent,
    BSFormInputComponent,
    BSImgLazyComponent,
    BSModalMessagesComponent,
    BaseSpinnerComponent,
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
