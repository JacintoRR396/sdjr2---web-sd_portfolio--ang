import { Component, Input, OnInit } from '@angular/core';

import { LazyImage } from '../interfaces/app-lazy-image.interface';
import { LoaderSvgType } from '../enums/app-loader-svg.enum';

@Component({
  selector: 'sdjr2--app-lazy-image',
  templateUrl: './app-lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input({ required: true }) public lazyImage!: LazyImage;

  private loaderTypeDefault: LoaderSvgType = LoaderSvgType.Puff;
  private loaderSizeDefault: number = 64;
  private loaderDelayDefault: number = 3000;
  public hasLoaded: boolean = false;

  ngOnInit(): void {
    this.checkInputs();
  }

  private checkInputs(): void {
    if (!this.lazyImage.path) {
      throw new Error('Path property is required.');
    }
    if (!this.lazyImage.alt) {
      this.lazyImage.alt = 'This is an image';
    }
    if (!this.lazyImage.configLoader) {
      this.lazyImage.configLoader = {
        type: this.loaderTypeDefault,
        size: this.loaderSizeDefault
      };
    } else {
      if (!this.lazyImage.configLoader.type) {
        this.lazyImage.configLoader.type = this.loaderTypeDefault;
      }
      if (!this.lazyImage.configLoader.size) {
        this.lazyImage.configLoader.size = this.loaderSizeDefault;
      }
      if (!this.lazyImage.configLoader.delay) {
        this.lazyImage.configLoader.delay = this.loaderDelayDefault;
      }
    }
  }

  onLoad(): void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, this.loaderDelayDefault);
  }
}
