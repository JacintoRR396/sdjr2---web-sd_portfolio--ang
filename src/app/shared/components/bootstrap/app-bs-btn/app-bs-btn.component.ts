import { Attribute, Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonConfig, ButtonConfigStyle, ButtonHelper } from '../../../models/interfaces/app-comp-btn.interface';

@Component({
  selector: 'sdjr2--app-bs-btn',
  templateUrl: './app-bs-btn.component.html',
  styleUrl: './app-bs-btn.component.scss'
})
export class BSBtnComponent {

  @Input({required: true}) btnConfigStyle!: ButtonConfigStyle;
  @Input({required: true}) btnConfig!: ButtonConfig;
  @Input() isSpinnerActive: boolean = false;
  @Input() isDisabled: boolean = false;
  @Output() evtEmitterClick: EventEmitter<boolean> = new EventEmitter();

  classesStyle: string[] = [];

  get type(): string {
    return ButtonHelper.typeToString( this.btnConfig.type );
  }
  get name(): string {
    return this.btnConfig.name;
  }
  get iconBS(): string | undefined {
    return this.btnConfig.iconBS;
  }
  get link(): string | undefined {
    return this.btnConfig.link;
  }

  isTypeButton(): boolean {
    return ButtonHelper.typeIsButton( this.btnConfig.type );
  }

  getClassesToApply(): any {
    this.addClassStyle( this.btnConfigStyle.color );
    this.addClassStyle( this.btnConfigStyle.size ?? '' );
    this.addClassStyle( this.btnConfigStyle.width ?? '' );
    this.addClassStyle( this.btnConfigStyle.space ?? '' );
    return this.classesStyle;
  }
  private addClassStyle( classStyle: string ): void {
    if( classStyle ) {
      this.classesStyle.push( classStyle );
    }
  }

  onClick(): void {
    this.evtEmitterClick.emit( true );
  }
}
