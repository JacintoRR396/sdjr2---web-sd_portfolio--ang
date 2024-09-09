import { Pipe, PipeTransform } from '@angular/core';

import { LoaderSvgType } from '../enums/loader-svg.enum';

@Pipe({
  name: 'pathLoaderLazyImage',
})
export class PathLoaderLazyImagePipe implements PipeTransform {
  private pathLoadersSvg: string = '/assets/images/app/loaders/';

  transform(loaderSvg: LoaderSvgType): string {
    return `${this.pathLoadersSvg}${loaderSvg}`;
  }
}
