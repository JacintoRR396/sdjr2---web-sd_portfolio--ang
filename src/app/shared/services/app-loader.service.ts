import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private apiCount = 0;
  private isLoadingSubject = new BehaviorSubject<boolean>( false );
  private _isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();

  constructor() { }

  get isLoading(): Observable<boolean> {
    return this._isLoading$;
  }

  show() {
    if ( this.apiCount === 0 ) {
      this.isLoadingSubject.next( true );
    }
    this.apiCount++;
  }

  hide() {
    this.apiCount--;
    if ( this.apiCount === 0 ) {
      this.isLoadingSubject.next( false );
    }
  }
}
