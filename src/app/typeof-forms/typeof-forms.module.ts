import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeofFormsRoutingModule } from './typeof-forms-routing.module';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';


@NgModule({
  declarations: [
    StudentRegistrationComponent
  ],
  imports: [
    CommonModule,
    TypeofFormsRoutingModule
  ]
})
export class TypeofFormsModule { }
