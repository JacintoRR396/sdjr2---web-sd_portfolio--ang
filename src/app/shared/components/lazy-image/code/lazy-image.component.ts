import { Component, Input, OnInit } from '@angular/core';

import { LazyImage } from '../interfaces/lazy-image.interface';
import { LoaderSvgType } from '../enums/loader-svg.enum';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {
  @Input({ required: true }) public lazyImage!: LazyImage;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    this.checkInputs();
  }

  private checkInputs(): void {
    if (!this.lazyImage.urlImage) {
      throw new Error('Url property is requited.');
    }
    if (!this.lazyImage.alt) {
      this.lazyImage.alt = '';
    }
    if (!this.lazyImage.config) {
      this.lazyImage.config = { urlLoader: LoaderSvgType.Puff };
    }
    if (!this.lazyImage.config.urlLoader) {
      this.lazyImage.config.urlLoader = LoaderSvgType.Puff;
    }
  }

  onLoad(): void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 500);
  }
}
