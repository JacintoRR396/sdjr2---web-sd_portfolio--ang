import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private errorsSubject = new BehaviorSubject<string[]>( [] );
  errors$: Observable<string[]> = this.errorsSubject.asObservable()
  .pipe( filter( msgs => msgs && msgs.length > 0 ) );

  constructor() { }

  showErrors( ...errors: string[] ): void {
    this.errorsSubject.next( errors );
  }

  resetErrors(): void {
    this.errorsSubject.next( ['No hay mensajes de error :).'] );
  }
}
