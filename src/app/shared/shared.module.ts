import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LazyImageComponent } from './components/lazy-image/code/lazy-image.component';
import { PathLoaderLazyImagePipe } from './components/lazy-image/pipes/path-loader-lazy-image.pipe';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    LazyImageComponent,
    PathLoaderLazyImagePipe,
    SearchBoxComponent,
  ],
  imports: [CommonModule],
  exports: [LazyImageComponent, SearchBoxComponent],
})
export class SharedModule {}
