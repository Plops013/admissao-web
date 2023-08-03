import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'aw-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input('loading') loading: boolean = false;
  @Input('disabled') disabled: boolean = false;
  @Input('size') size: 'md' | 'lg' = 'md';
  @Input('type') type: 'primary' | 'secondary' = 'primary';
  @Output('click') click: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  onClick(): void { 
    this.click.emit();
  }
}
