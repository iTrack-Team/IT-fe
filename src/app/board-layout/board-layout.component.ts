import { Component } from '@angular/core';

@Component({
  selector: 'exc-board-layout',
  templateUrl: './board-layout.component.html',
  styleUrls: ['./board-layout.component.css']
})
export class BoardLayoutComponent {
  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
  columns = [{
    id: '1',
    name: 'column1',
    tasks: [{
      name: 'Task1',
      description: 'T1-description',
    },
    {
      name: 'Task2',
      description: 'T2-description',
    }]
  },
  {
    name: 'column2',
    tasks: [{
      name: 'Task1-2',
      description: 'T1-description',
    },
    {
      name: 'Task2-2',
      description: 'T2-description',
    }]
  }];
}
