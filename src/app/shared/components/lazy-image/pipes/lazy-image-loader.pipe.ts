import { Pipe, PipeTransform } from '@angular/core';

import { LoaderSvgType } from '../enums/loader-svg.enum';

@Pipe({
  name: 'lazyImageLoader',
})
export class LazyImageLoaderPipe implements PipeTransform {
  private urlLoadersSvg: string = 'assets/images/loaders/';

  transform(loaderSvg: LoaderSvgType): string {
    return `${this.urlLoadersSvg}${loaderSvg}`;
  }
}
