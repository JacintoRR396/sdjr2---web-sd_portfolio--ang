import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyImageComponent } from './components/app-lazy-image/code/app-lazy-image.component';
import { SearchBoxComponent } from './components/app-search-box/app-search-box.component';
import { Error404PageComponent } from './pages/app-error-404-page/app-error-404-page.component';

import { EllipsisPipe } from './pipes/app-ellipsis.pipe';
import { PathLoaderLazyImagePipe } from './components/app-lazy-image/pipes/app-path-loader-lazy-image.pipe';

@NgModule({
  declarations: [
    LazyImageComponent,
    PathLoaderLazyImagePipe,
    SearchBoxComponent,
    Error404PageComponent,
    EllipsisPipe,
  ],
  imports: [CommonModule],
  exports: [
    LazyImageComponent,
    SearchBoxComponent,
    Error404PageComponent,
    EllipsisPipe
  ],
})
export class AppSharedModule {}
