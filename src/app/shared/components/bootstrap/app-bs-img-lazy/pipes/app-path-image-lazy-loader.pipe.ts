import { Pipe, PipeTransform } from '@angular/core';

import { LoaderSvgType } from '../interfaces/app-comp-img-lazy.interface';

@Pipe({
  name: 'pathImageLazyLoader',
})
export class PathImageLazyLoaderPipe implements PipeTransform {
  private readonly pathLoadersSvg: string = '/assets/images/app/loaders/';

  transform( loaderSvg: LoaderSvgType ): string {
    return `${this.pathLoadersSvg}${loaderSvg}`;
  }
}
