import { Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, tap } from 'rxjs';

import { FormControlInputOptConfig, FormControlInputOptHelper } from '../interfaces/app-comp-form-input-opt.interface';

@Component({
  selector: 'sdjr2--app-bs-form-input-opt',
  templateUrl: './app-bs-form-input-opt.component.html',
  styleUrl: './app-bs-form-input-opt.component.scss'
})
export class BSFormInputOptComponent implements OnDestroy {

  @Input({required: true}) fc!: FormControl;
  @Input({required: true}) fcConfig!: FormControlInputOptConfig;
  @ViewChild('inputControl') inputControl! : ElementRef<HTMLInputElement>;

  subsValueChanges!: Subscription;

  ngAfterViewInit(): void {
    this.subsValueChanges = this.fc.valueChanges
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
    return FormControlInputOptHelper.typeToString( this.fcConfig.type );
  }

  showError(): boolean {
    return this.fc.touched && this.fc.dirty && !this.fc.value;
  }
  isValid(): boolean {
    return this.fc.touched && this.fc.dirty && this.fc.value;
  }
}
