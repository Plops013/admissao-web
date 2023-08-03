import { Component, Input } from '@angular/core';
import { Step } from '../../../_domain/interfaces/step';

@Component({
  selector: 'aw-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  @Input('steps') steps: Step[] = [];

  constructor() {}



  
}
