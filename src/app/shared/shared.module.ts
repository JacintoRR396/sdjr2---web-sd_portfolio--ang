import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/code/footer.component';
import { HeaderComponent } from './components/header/code/header.component';
import { HeaderLinkComponent } from './components/header/components/header-link/header-link.component';
import { HeaderNavComponent } from './components/header/components/header-nav/header-nav.component';
import { LazyImageComponent } from './components/lazy-image/code/lazy-image.component';
import { PathLoaderLazyImagePipe } from './components/lazy-image/pipes/path-loader-lazy-image.pipe';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HeaderLinkComponent,
    HeaderNavComponent,
    LazyImageComponent,
    PathLoaderLazyImagePipe,
    SearchBoxComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, LazyImageComponent, SearchBoxComponent, FooterComponent],
})
export class SharedModule {}
