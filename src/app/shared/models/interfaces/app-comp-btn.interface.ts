import { throwError } from "rxjs";

export enum ButtonType { BUTTON, LINK }

export interface ButtonConfigStyle {
  color: string;
  size?: string;
  width?: string;
  space?: string;
}

export interface ButtonConfig {
  type: ButtonType;
  name: string;
  iconBS?: string;
  link?: string;
}

export class ButtonHelper {
  static typeToString( type: ButtonType ): string {
    switch( type ) {
      case ButtonType.BUTTON: return 'button';
      case ButtonType.LINK: return 'link';
      default: throwError( () => `The type '${ type }' is not valid.` );
    }
    return '';
  }
  static typeIsButton( type: ButtonType ): boolean {
      return type === ButtonType.BUTTON;
    }
}
