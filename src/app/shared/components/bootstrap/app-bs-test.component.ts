import { Component } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";

import { FormControlInputConfig, FormControlInputType } from "./app-bs-form-input/interfaces/app-comp-form.interface";
import { AppSharedModule } from "../../app-shared.module";

@Component({
  selector: 'sdjr2--app-bs-test',
  templateUrl: './app-bs-test.component.html',
  standalone: true,
  imports: [AppSharedModule],
})
export class BSTestComponent {

  fgLogin!: UntypedFormGroup;
  fcEmailConfig!: FormControlInputConfig;

  constructor(
    private readonly fb: UntypedFormBuilder,
  ){
    this.createFormGroup();
    this.createFormConstrols();
  }

  private createFormGroup(): void {
    this.fgLogin = this.fb.group({});
  }
  private createFormConstrols(): void {
    this.fcEmailConfig = {
      type: FormControlInputType.EMAIL,
      name: 'email',
      iconBS: 'bi-envelope-at',
      placeHolder: 'Enter your email',
      valueDefault: '',
      validators: [ Validators.required, Validators.minLength(15), Validators.maxLength(60), Validators.email ]
    };
  }
}
