import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { WebHeaderSharedComponent } from './components/web-header-shared/code/web-header-shared.component';
import { WebHeaderNavSharedComponent } from './components/web-header-shared/components/web-header-nav-shared/web-header-nav-shared.component';
import { WebHeaderLinksSharedComponent } from './components/web-header-shared/components/web-header-links-shared/web-header-links-shared.component';
import { WebFooterSharedComponent } from './components/web-footer-shared/code/web-footer-shared.component';
import { WebFooterAuthorSharedComponent } from './components/web-footer-shared/components/web-footer-author-shared/web-footer-author-shared.component';
import { WebFooterLinksSharedComponent } from './components/web-footer-shared/components/web-footer-links-shared/web-footer-links-shared.component';


@NgModule({
  declarations: [
    WebHeaderSharedComponent,
    WebHeaderNavSharedComponent,
    WebHeaderLinksSharedComponent,
    WebFooterSharedComponent,
    WebFooterAuthorSharedComponent,
    WebFooterLinksSharedComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [
    WebHeaderSharedComponent,
    WebFooterSharedComponent
  ]
})
export class WebSharedModule { }
