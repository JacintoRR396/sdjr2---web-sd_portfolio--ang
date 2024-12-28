import { ValidatorFn } from "@angular/forms";
import { throwError } from "rxjs";

// FormControl
export enum FormControlInputType { TEXT, EMAIL, PASSWORD, CHECKBOX, RADIO }

export interface FormControlInputConfig {
  type: FormControlInputType;
  name: string;
  lbl: string;
  iconBS?: string;
  placeHolder?: string;
  valueDefault: string | boolean;
  validators?: ValidatorFn[];
  isMandatory: boolean;
}

export class FormControlInputHelper {
  static typeToString( type: FormControlInputType ): string {
    switch( type ) {
      case FormControlInputType.TEXT: return 'text';
      case FormControlInputType.EMAIL: return 'email';
      case FormControlInputType.PASSWORD: return 'password';
      case FormControlInputType.CHECKBOX: return 'checkbox';
      case FormControlInputType.RADIO: return 'radio';
      default: throwError( () => `The type '${ type }' is not valid.` );
    }
    return '';
  }
  static typeIsPassword( type: FormControlInputType ): boolean {
    return type === FormControlInputType.PASSWORD;
  }
  static typeIsCheckboxOrRadio( type: FormControlInputType ): boolean {
    return type === FormControlInputType.CHECKBOX || type === FormControlInputType.RADIO;
  }
}
