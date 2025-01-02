import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ModalConfig } from '../components/bootstrap/app-bs-modal/interfaces/app-bs-comp-modal.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalStore {

  private readonly configDefault = { btnClose: true, msg: 'modal by defect' };
  private readonly fnDefault = () => {};

  private readonly showSubject = new BehaviorSubject<boolean>( false );
  show$: Observable<boolean> = this.showSubject.asObservable();
  private readonly configSubject = new BehaviorSubject<ModalConfig>( this.configDefault );
  config$: Observable<ModalConfig> = this.configSubject.asObservable();

  private readonly fnBtnCloseSubject = new BehaviorSubject<Function>( this.fnDefault );
  fnBtnClose$: Observable<Function> = this.fnBtnCloseSubject.asObservable();
  private readonly fnBtnLeftSubject = new BehaviorSubject<Function>( this.fnDefault );
  fnBtnLeft$: Observable<Function> = this.fnBtnLeftSubject.asObservable();
  private readonly fnBtnRightSubject = new BehaviorSubject<Function>( this.fnDefault );
  fnBtnRight$: Observable<Function> = this.fnBtnRightSubject.asObservable();

  constructor() { }

  init( config: ModalConfig, fnBtnClose: Function, fnBtnLeft: Function, fnBtnRight: Function ): void {
    this.setConfig( config );
    this.setFnBtnClose( fnBtnClose );
    this.setFnBtnLeft( fnBtnLeft );
    this.setFnBtnRight( fnBtnRight );
  }
  reset(): void {
    this.setConfig( this.configDefault );
    this.setFnBtnClose( this.fnDefault );
    this.setFnBtnLeft( this.fnDefault );
    this.setFnBtnRight( this.fnDefault );
  }

  show() {
    this.showSubject.next( true );
  }
  hide() {
    this.showSubject.next( false );
  }

  setConfig( config: ModalConfig ): void {
    this.configSubject.next( config );
  }
  setFnBtnClose( fnBtnClose: Function ): void {
    this.fnBtnCloseSubject.next( fnBtnClose );
  }
  setFnBtnLeft( fnBtnLeft: Function ): void {
    this.fnBtnLeftSubject.next( fnBtnLeft );
  }
  setFnBtnRight( fnBtnRight: Function ): void {
    this.fnBtnRightSubject.next( fnBtnRight );
  }
}
