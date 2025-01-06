import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';

import { FormsService } from '../../../../services/app-forms.service';

import { FormControlInputConfig, FormControlInputHelper } from '../interfaces/app-comp-form-input.interface';

@Component({
  selector: 'sdjr2--app-bs-form-input',
  templateUrl: './app-bs-form-input.component.html',
  styleUrl: './app-bs-form-input.component.scss'
})
export class BSFormInputComponent implements OnInit, OnDestroy {

  @Input({required: true}) fc!: FormControl;
  @Input({required: true}) fcConfig!: FormControlInputConfig;
  @Input() fgErrors!: ValidationErrors;
  @ViewChild('inputControl') inputControl! : ElementRef<HTMLInputElement>;

  subsValueChanges!: Subscription;
  error = '';
  canShowPassword: boolean = false;

  constructor(
    private readonly formsService: FormsService,
  ){}

  ngOnInit(): void {
    this.subsValueChanges = this.fc.valueChanges
      .pipe( debounceTime( 300 ), distinctUntilChanged() )
      .subscribe( () => this.error = this.checkErrors() );
  }

  ngOnDestroy(): void {
    this.subsValueChanges?.unsubscribe();
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

  isValid(): boolean {
    return this.formsService.isValidFc( this.fc, this.fgErrors );
  }
  showErrors(): boolean {
    return this.formsService.showErrorsFc( this.fc, this.fgErrors );
  }
  checkErrors(): string {
    return this.formsService.checkErrorsFcInput( this.fc, this.labelControl, this.fgErrors );
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
}
