import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';

import { MessagesErrorService } from '../../../../services/app-messages-error.service';

import { FormControlInputConfig, FormControlInputHelper } from '../interfaces/app-comp-form-input.interface';

@Component({
  selector: 'sdjr2--app-bs-form-input',
  templateUrl: './app-bs-form-input.component.html',
  styleUrl: './app-bs-form-input.component.scss'
})
export class BSFormInputComponent implements OnInit, AfterViewInit {

  @Input({required: true}) fc!: FormControl;
  @Input({required: true}) fcConfig!: FormControlInputConfig;
  @Input() fgErrors!: ValidationErrors;
  @ViewChild('inputControl') inputControl! : ElementRef<HTMLInputElement>;

  error = '';
  canShowPassword: boolean = false;
  isChecked: boolean = false;

  constructor(
    private readonly messagesErrorService: MessagesErrorService
  ){}

  ngOnInit(): void {
    if( !this.isTypeCheckboxOrRadio() ) {
      this.fc.valueChanges
        .pipe( debounceTime( 300 ), distinctUntilChanged() )
        .subscribe( () => this.error = this.checkErrors() );
    }

  }
  ngAfterViewInit(): void {
    if( this.isTypeCheckboxOrRadio() ) {
      this.fc.valueChanges
        .pipe(
          tap( resp => {
            if( resp === 'false' || resp === '' ) {
              this.inputControl.nativeElement.value = 'true';
            } else {
              this.inputControl.nativeElement.value = 'false';
            }
          })
        )
        .subscribe();
    }
  }

  get nameControl(): string {
    return this.fcConfig.name;
  }
  get labelControl(): string {
    return this.fcConfig.lbl;
  }
  get typeControl(): string {
    return FormControlInputHelper.typeToString( this.fcConfig.type );
  }
  get nameControlHelp(): string {
    return this.fcConfig.name + 'Help';
  }
  get isMandatory(): boolean {
    return this.fcConfig.isMandatory;
  }

  // Text, Email, Password
  checkErrors(): string {
    if( this.fc.errors?.['required'] ) {
      return this.messagesErrorService.getFormControlRequired( this.labelControl.toLocaleLowerCase() );
    } else if( this.fc.errors?.['minlength'] ) {
      return this.messagesErrorService.getFormControlMinLength(
        this.nameControl, this.fc.errors?.['minlength'].requiredLength, this.fc.errors?.['minlength'].actualLength );
    } else if( this.fc.errors?.['maxlength'] ) {
      return this.messagesErrorService.getFormControlMaxLength(
        this.nameControl, this.fc.errors?.['maxlength'].requiredLength, this.fc.errors?.['maxlength'].actualLength );
    } else if( this.fc.errors?.['email'] ) {
      return this.messagesErrorService.getFormControlEmailFormat();
    } else if( this.fc.errors?.['emailExists'] ) {
      return this.messagesErrorService.getFormControlEmailExists();
    } else if( this.fc.errors?.['emailNotExists'] ) {
      return this.messagesErrorService.getFormControlEmailNotExists();
    } else if( this.fc.errors?.['pwdStrength'] ) {
      return this.messagesErrorService.getFormControlPwdFormat();
    } else if ( this.fgErrors?.['pwdVerify'] ) {
      return this.messagesErrorService.getFormControlPwdVerify();
    }
     else {
      return '';
    }
  }

  showErrors(): boolean {
    return this.fc.touched && this.fc.dirty &&
      ( !!this.fc.errors || !!this.fgErrors );
  }

  isValid(): boolean {
    return this.fc.touched && this.fc.dirty &&
      ( this.fc.errors === null && this.fgErrors === undefined || this.fgErrors === null );
  }

  isTypePassword(): boolean {
    return FormControlInputHelper.typeIsPassword( this.fcConfig.type );
  }

  onShowPassword(): void {
    this.canShowPassword = !this.canShowPassword;
    if ( this.canShowPassword ) {
      this.inputControl.nativeElement.type = 'text';
    } else {
      this.inputControl.nativeElement.type = 'password';
    }
  }

  // Checkbox, Radio
  isTypeCheckboxOrRadio(): boolean {
    return FormControlInputHelper.typeIsCheckboxOrRadio( this.fcConfig.type );
  }
}
