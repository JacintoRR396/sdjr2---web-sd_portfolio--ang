export enum LoaderSvgType {
  Audio = 'audio.svg',
  BallTriangle = 'ball-triangle.svg',
  Bars = 'bars.svg',
  Circles = 'circles.svg',
  Grids = 'grid.svg',
  Hearts = 'hearts.svg',
  Oval = 'oval.svg',
  Puff = 'puff.svg',
  Rings = 'rings.svg',
  SpinningCircles = 'spinning-circles.svg',
  TailSpin = 'tall-spin.svg',
  ThreeDots = 'three-dots.svg',
}

export interface ImageLazyConfig {
  src: string;
  alt?: string;
}

export interface ImageLazyConfigStyle {
  isThumbnails?: boolean;
  isRounded?: boolean;
}

export interface ImageLazyConfigLoader {
  type?: LoaderSvgType;
  size?: number;
  delay?: number;
}
