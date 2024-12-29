import { AbstractControl, FormArray, FormControl, FormGroup } from "@angular/forms";

export class FormHelper {
  /**
  * Marks all the controls and their nested controls as dirty.
  * @param abstractControls - an array of controls(can be FormControls, FormGroups or FormArrays)
  */
  static markAllControlsAsDirty( abstractControls: AbstractControl[] ): void {
    abstractControls.forEach((abstractControl) => {
      if ( abstractControl instanceof FormControl ) {
        ( abstractControl as FormControl ).markAsDirty({ onlySelf: true });
      } else if ( abstractControl instanceof FormGroup ) {
        FormHelper.markAllControlsAsDirty(
          Object.values( ( abstractControl as FormGroup ).controls )
        );
      } else if ( abstractControl instanceof FormArray ) {
        FormHelper.markAllControlsAsDirty( ( abstractControl as FormArray ).controls );
      }
    });
  }
}

export interface FormLogin {
  email: string;
  pwd: string;
  remember: boolean;
}

export interface FormRegister {
  username: string;
  email: string;
  pwd: string;
  pwd_verify: string;
  terms: boolean;
}
