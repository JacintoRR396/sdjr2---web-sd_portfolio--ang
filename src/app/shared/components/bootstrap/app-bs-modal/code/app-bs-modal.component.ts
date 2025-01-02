import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';

import { ModalConfig } from '../interfaces/app-bs-comp-modal.interface';

@Component({
  selector: 'sdjr2--app-bs-modal',
  templateUrl: './app-bs-modal.component.html',
  styleUrl: './app-bs-modal.component.scss'
})
export class BSModalComponent implements OnChanges {

  @Input({required: true}) show!: boolean;
  @Input({required: true}) modalConfig!: ModalConfig;

  @Output() evtEmitterBtnClose: EventEmitter<boolean> = new EventEmitter();
  @Output() evtEmitterBtnLeft: EventEmitter<boolean> = new EventEmitter();
  @Output() evtEmitterBtnRight: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('bsModalBtn') bsModalBtnDOM!: ElementRef<HTMLButtonElement>;

  ngOnChanges( changes: SimpleChanges ): void {
    if ( changes['show']?.currentValue ) {
      this.bsModalBtnDOM.nativeElement.click();
    }
  }

  onClickBtnClose(): void {
    this.evtEmitterBtnClose.emit( true );
  }
  onClickBtnLeft(): void {
    this.evtEmitterBtnLeft.emit( true );
  }
  onClickBtnRight(): void {
    this.evtEmitterBtnRight.emit( true );
  }
}
