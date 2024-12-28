import { Component, Input, OnInit } from '@angular/core';

import { ImageLazyConfig, ImageLazyConfigLoader, ImageLazyConfigStyle, LoaderSvgType } from '../interfaces/app-comp-img-lazy.interface';

@Component({
  selector: 'sdjr2--app-bs-img-lazy',
  templateUrl: './app-bs-img-lazy.component.html',
  styleUrl: './app-bs-img-lazy.component.scss'
})
export class BSImgLazyComponent implements OnInit {

  @Input({ required: true }) public imgLazyConfig!: ImageLazyConfig;
  @Input() public imgLazyConfigStyle!: ImageLazyConfigStyle;
  @Input() public imgLazyConfigLoader!: ImageLazyConfigLoader;

  private readonly classesStyle: string[] = [];

  private readonly loaderTypeDefault: LoaderSvgType = LoaderSvgType.Puff;
  private readonly loaderSizeDefault: number = 64;
  private readonly loaderDelayDefault: number = 500;
  public hasLoaded: boolean = false;

  ngOnInit(): void {
    this.checkInputs();
  }

  get imgSrc(): string {
    return this.imgLazyConfig.src;
  }
  get imgAlt(): string {
    return this.imgLazyConfig.alt!;
  }
  get loaderType(): LoaderSvgType {
    return this.imgLazyConfigLoader.type!;
  }
  get loaderSize(): number {
    return this.imgLazyConfigLoader.size!;
  }
  get loaderDelay(): number {
    return this.imgLazyConfigLoader.delay!;
  }

  private checkInputs(): void {
    if ( !this.imgLazyConfig.alt ) {
      this.imgLazyConfig.alt = 'This is an image';
    }
    if ( !this.imgLazyConfigLoader ) {
      this.imgLazyConfigLoader = {
        type: this.loaderTypeDefault,
        size: this.loaderSizeDefault
      };
    } else {
      if ( !this.imgLazyConfigLoader.type ) {
        this.imgLazyConfigLoader.type = this.loaderTypeDefault;
      }
      if (!this.imgLazyConfigLoader.size) {
        this.imgLazyConfigLoader.size = this.loaderSizeDefault;
      }
      if (!this.imgLazyConfigLoader.delay) {
        this.imgLazyConfigLoader.delay = this.loaderDelayDefault;
      }
    }
  }

  getClassesToApply(): any {
    if ( this.imgLazyConfigStyle ) {
      if( this.imgLazyConfigStyle.isThumbnails ) {
        this.classesStyle.push( 'img-thumbnail' );
      }
      if( this.imgLazyConfigStyle.isRounded ) {
        this.classesStyle.push( 'rounded' );
      }
    }

    return this.classesStyle;
  }

  onLoad(): void {
    setTimeout( () => {
        this.hasLoaded = true;
      },
      this.loaderDelayDefault
    );
  }
}
