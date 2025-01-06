import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BSAuthFormTemplateComponent } from './templates/auth-bs-form-template/auth-bs-form-template.component';
import { AppSharedModule } from "../../../shared/app-shared.module";

@NgModule({
  declarations: [
    BSAuthFormTemplateComponent,
  ],
  imports: [
    CommonModule,
    AppSharedModule
],
  exports: [
    BSAuthFormTemplateComponent,
  ]
})
export class AuthSharedModule { }
