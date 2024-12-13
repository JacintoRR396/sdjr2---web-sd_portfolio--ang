import { LoaderSvgType } from '../enums/app-loader-svg.enum';

export interface LazyImage {
  path: string;
  alt?: string;
  size?: number;
  configLoader?: ConfigLoaderLazyImage;
}

export interface ConfigLoaderLazyImage {
  type?: LoaderSvgType;
  size?: number;
  delay?: number;
}
