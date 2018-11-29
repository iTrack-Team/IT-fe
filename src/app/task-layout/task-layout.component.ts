import { Component, Input } from '@angular/core';

@Component({
  selector: 'exc-task-layout',
  templateUrl: './task-layout.component.html',
  styleUrls: ['./task-layout.component.css']
})
export class TaskLayoutComponent {

  constructor() { }
  @Input() name;
  @Input() description;
  @Input() id;
}
