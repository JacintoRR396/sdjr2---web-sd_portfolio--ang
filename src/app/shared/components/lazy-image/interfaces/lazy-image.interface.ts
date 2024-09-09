import { LoaderSvgType } from '../enums/loader-svg.enum';

export interface LazyImage {
  path: string;
  alt?: string;
  size?: number;
  configLoader?: LazyImageConfigLoader;
}

export interface LazyImageConfigLoader {
  type?: LoaderSvgType;
  size?: number;
  delay?: number;
}
