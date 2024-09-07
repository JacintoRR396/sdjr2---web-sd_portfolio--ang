import { LoaderSvgType } from '../enums/loader-svg.enum';

export interface LazyImage {
  path: string;
  alt?: string;
  configLoader?: LazyImageConfigLoader;
}

export interface LazyImageConfigLoader {
  type?: LoaderSvgType;
  size?: number;
}
