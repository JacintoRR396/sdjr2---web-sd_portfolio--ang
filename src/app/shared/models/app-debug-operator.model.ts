import { Observable, tap } from "rxjs";

export enum LogLevel { TRACE, DEBUG, INFO, ERROR }

let loggerLevel: LogLevel = LogLevel.DEBUG;
export function setLoggerLevel( level: LogLevel ): void {
	loggerLevel = level;
}

export const debug = ( level: number, clazz: string, msg: string ) =>
  ( source: Observable<any> ) => source
    .pipe(
      tap( val => {
        if( level >= loggerLevel ) {
          console.log( `${clazz} : ${msg} -> ${val}` );
        }
      })
    );

export const logConsole = ( level: number, clazz: string, msg: string ) => {
  if( level >= loggerLevel ) {
    console.log( `${clazz} -> ${msg}` );
  }
};
