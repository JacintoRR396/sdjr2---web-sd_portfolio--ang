import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LazyImageComponent } from './components/lazy-image/code/lazy-image.component';
import { LazyImageLoaderPipe } from './components/lazy-image/pipes/lazy-image-loader.pipe';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [LazyImageComponent, LazyImageLoaderPipe, SearchBoxComponent],
  imports: [CommonModule],
  exports: [LazyImageComponent, SearchBoxComponent],
})
export class SharedModule {}
