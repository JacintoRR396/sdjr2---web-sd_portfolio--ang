import { LoaderSvgType } from '../enums/loader-svg.enum';

export interface LazyImage {
  urlImage: string;
  alt?: string;
  config?: LazyImageConfig;
}

export interface LazyImageConfig {
  urlLoader?: LoaderSvgType;
}
