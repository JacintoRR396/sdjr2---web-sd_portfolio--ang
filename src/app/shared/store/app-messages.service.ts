import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesStore {

  private errorsSubject = new BehaviorSubject<string[]>( [] );
  errors$: Observable<string[]> = this.errorsSubject.asObservable();
  hasErrors$: Observable<boolean>;

  constructor() {
    this.hasErrors$ = this.errors$
      .pipe( map( errors => errors.length > 0 ) );
  }

  showErrors( ...errors: string[] ): void {
    this.errorsSubject.next( errors );
  }

  resetErrors(): void {
    this.errorsSubject.next( [] );
  }
}
