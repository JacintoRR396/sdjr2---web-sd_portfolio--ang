import { Pipe, PipeTransform } from '@angular/core';

import { LoaderSvgType } from '../enums/app-loader-svg.enum';

@Pipe({
  name: 'pathLoaderLazyImage',
})
export class PathLoaderLazyImagePipe implements PipeTransform {
  private readonly pathLoadersSvg: string = '/assets/images/app/loaders/';

  transform(loaderSvg: LoaderSvgType): string {
    return `${this.pathLoadersSvg}${loaderSvg}`;
  }
}
