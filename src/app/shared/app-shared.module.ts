import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyImageComponent } from './components/lazy-image/code/lazy-image.component';
import { PathLoaderLazyImagePipe } from './components/lazy-image/pipes/path-loader-lazy-image.pipe';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { AppError404PageSharedComponent } from './pages/app-error-404-page-shared/app-error-404-page-shared.component';

import { EllipsisPipe } from './pipes/ellipsis.pipe';

@NgModule({
  declarations: [
    LazyImageComponent,
    PathLoaderLazyImagePipe,
    SearchBoxComponent,
    AppError404PageSharedComponent,
    EllipsisPipe,
  ],
  imports: [CommonModule],
  exports: [
    LazyImageComponent,
    SearchBoxComponent,
    AppError404PageSharedComponent,
    EllipsisPipe
  ],
})
export class AppSharedModule {}
