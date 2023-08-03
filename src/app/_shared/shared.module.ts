import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './_components/header/header.component';
import { SideMenuComponent } from './_components/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { StepperComponent } from './_components/stepper/stepper.component';
import { FormFieldComponent } from './_components/form-field/form-field.component';
import { ButtonComponent } from './_components/button/button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    StepperComponent,
    FormFieldComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    SideMenuComponent,
    StepperComponent,
    FormFieldComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
