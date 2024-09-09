import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/code/header.component';
import { HeaderLinkComponent } from './components/header/components/header-link/header-link.component';
import { HeaderNavComponent } from './components/header/components/header-nav/header-nav.component';
import { LazyImageComponent } from './components/lazy-image/code/lazy-image.component';
import { PathLoaderLazyImagePipe } from './components/lazy-image/pipes/path-loader-lazy-image.pipe';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderLinkComponent,
    HeaderNavComponent,
    LazyImageComponent,
    PathLoaderLazyImagePipe,
    SearchBoxComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, LazyImageComponent, SearchBoxComponent],
})
export class SharedModule {}
