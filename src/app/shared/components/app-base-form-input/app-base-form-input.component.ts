import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

import { MessagesErrorService } from '../../services/app-messages-error.service';

import { FormControlInputConfig, FormControlInputTypeHelper } from '../../models/interfaces/app-form.interface';

@Component({
  selector: 'sdjr2--app-base-form-input',
  templateUrl: './app-base-form-input.component.html',
  styleUrl: './app-base-form-input.component.scss'
})
export class BaseFormInputComponent implements OnInit {

  @Input({required: true}) fg!: UntypedFormGroup;
  @Input({required: true}) fcConfig!: FormControlInputConfig;

  @ViewChild('inputControl') inputControl! : ElementRef<HTMLInputElement>;

  error = '';
  canShowPassword: boolean = false;

  constructor(
    private readonly fb: UntypedFormBuilder,
    private readonly messagesErrorService: MessagesErrorService ){  }

  ngOnInit(): void {
    this.fg.addControl( this.nameControl, new FormControl<string | null>( this.fcConfig.valueDefault, this.fcConfig.validators ));
    this.fc.valueChanges
          .pipe( debounceTime(300), distinctUntilChanged() )
          .subscribe( () => this.error = this.checkErrors() );
  }

  get fc(): AbstractControl {
      return this.fg.controls[ this.nameControl ];
    }
  get nameControl(): string {
    return this.fcConfig.name;
  }
  get typeControl(): string {
    return FormControlInputTypeHelper.toString( this.fcConfig.type );
  }
  get nameControlHelp(): string {
    return this.fcConfig.name + 'Help';
  }
  get isTypePassword(): boolean {
    return FormControlInputTypeHelper.isPassword( this.fcConfig.type );
  }

  checkErrors(): string {
    if( this.fc.errors?.['required'] ) {
      return this.messagesErrorService.getFormControlRequired( this.nameControl );
    } else if( this.fc.errors?.['minlength'] ) {
      return this.messagesErrorService.getFormControlMinLength(
        this.nameControl, this.fc.errors?.['minlength'].requiredLength, this.fc.errors?.['minlength'].actualLength );
    } else if( this.fc.errors?.['maxlength'] ) {
      return this.messagesErrorService.getFormControlMaxLength(
        this.nameControl, this.fc.errors?.['maxlength'].requiredLength, this.fc.errors?.['maxlength'].actualLength );
    } else if( this.fc.errors?.['email'] ) {
      return this.messagesErrorService.getFormControlEmail();
    } else if( this.fc.errors?.['passwordStrength'] ) {
      return this.messagesErrorService.getFormControlPassword();
    } else
      return '';
  }

  showErrors(): boolean {
    return this.fc.touched && this.fc.dirty && !!this.fc.errors;
  }

  isValid(): boolean {
    return this.fc.touched && this.fc.dirty && this.fc.errors === null;
  }

  onShowPassword(): void {
    this.canShowPassword = !this.canShowPassword;
    if ( this.canShowPassword ) {
      this.inputControl.nativeElement.type = 'text';
    } else {
      this.inputControl.nativeElement.type = 'password';
    }
  }

}
