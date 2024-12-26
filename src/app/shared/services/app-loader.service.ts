import { Injectable } from '@angular/core';
import { BehaviorSubject, concatMap, finalize, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderStore {

  private apiCount = 0;
  private loadingSubject = new BehaviorSubject<boolean>( false );
  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor() { }

  showLoader<T>( obs$: Observable<T> ): Observable<T> {
    return of( null )
      .pipe(
        tap( () => this.loadingOn() ),
        concatMap( () => obs$ ),
        finalize( () => this.loadingOff() )
      );
  }

  loadingOn() {
    if ( this.apiCount === 0 ) {
      this.loadingSubject.next( true );
    }
    this.apiCount++;
  }

  loadingOff() {
    this.apiCount--;
    if ( this.apiCount === 0 ) {
      this.loadingSubject.next( false );
    }
  }
}
