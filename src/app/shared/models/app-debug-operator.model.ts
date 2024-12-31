import { Observable, tap } from "rxjs";

export enum LogginLevel { TRACE, DEBUG, INFO, ERROR }

let logginLevel: LogginLevel = LogginLevel.DEBUG;
export function setLogginLevel( level: LogginLevel ): void {
	logginLevel = level;
}

export const debug = ( level: number, clazz: string, msg: string ) =>
  ( source: Observable<any> ) => source
    .pipe(
      tap( val => {
        if( level >= logginLevel ) {
          console.log( `${clazz} : ${msg} -> ${val}` );
        }
      })
    );

export const logConsole = ( level: number, clazz: string, msg: string ) => {
  if( level >= logginLevel ) {
    console.log( `${clazz} -> ${msg}` );
  }
};
