import { Component, Input } from '@angular/core';
import { Breadcrumb } from 'src/app/_domain/interfaces/breadcrumb';

@Component({
  selector: 'aw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input('title') title: string = '';
  @Input('breadcrumbs') breadcrumbs: Breadcrumb[] = [];

  constructor() {}
}
