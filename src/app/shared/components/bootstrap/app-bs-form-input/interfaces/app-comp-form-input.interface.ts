import { AsyncValidatorFn, ValidatorFn } from "@angular/forms";
import { throwError } from "rxjs";

export enum FormControlInputType { TEXT, EMAIL, PASSWORD }

export interface FormControlInputConfig {
  type: FormControlInputType;
  name: string;
  lbl: string;
  iconBS?: string;
  placeHolder?: string;
  valueDefault: string;
  validators?: ValidatorFn[];
  asyncValidators?: AsyncValidatorFn[];
  isMandatory: boolean;
}

export class FormControlInputHelper {
  static typeToString( type: FormControlInputType ): string {
    switch( type ) {
      case FormControlInputType.TEXT: return 'text';
      case FormControlInputType.EMAIL: return 'email';
      case FormControlInputType.PASSWORD: return 'password';
      default: throwError( () => `The type '${ type }' is not valid.` );
    }
    return '';
  }
  static typeIsPassword( type: FormControlInputType ): boolean {
    return type === FormControlInputType.PASSWORD;
  }
}
