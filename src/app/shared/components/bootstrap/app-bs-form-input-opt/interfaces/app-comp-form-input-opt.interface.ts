import { throwError } from "rxjs";

export enum FormControlInputOptType { CHECKBOX, RADIO }

export interface FormControlInputOptConfig {
  type: FormControlInputOptType;
  name: string;
  lbl: string;
  valueDefault: string | boolean;
}

export class FormControlInputOptHelper {
  static typeToString( type: FormControlInputOptType ): string {
    switch( type ) {
      case FormControlInputOptType.CHECKBOX: return 'checkbox';
      case FormControlInputOptType.RADIO: return 'radio';
      default: throwError( () => `The type '${ type }' is not valid.` );
    }
    return '';
  }
  static typeIsCheckbox( type: FormControlInputOptType ): boolean {
    return type === FormControlInputOptType.CHECKBOX;
  }
  static typeIsRadio( type: FormControlInputOptType ): boolean {
    return type === FormControlInputOptType.RADIO;
  }
}
