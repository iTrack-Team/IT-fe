import { Component, Input } from '@angular/core';

@Component({
  selector: 'exc-column-layout',
  templateUrl: './column-layout.component.html',
  styleUrls: ['./column-layout.component.css']
})
export class ColumnLayoutComponent {
  @Input() column;
}
