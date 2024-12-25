import { Observable, tap } from "rxjs";

export enum LogginLevel { TRACE, DEBUG, INFO, ERROR }

let logginLevel: LogginLevel = LogginLevel.INFO;
export function setLogginLevel( level: LogginLevel ): void {
	logginLevel = level;
}

export const debug = ( level: number, msg: string ) =>
  ( source: Observable<any> ) => source
    .pipe(
      tap( val => {
        if( level >= logginLevel ) {
          console.log( msg + ' : ', val );
        }
      })
    );
