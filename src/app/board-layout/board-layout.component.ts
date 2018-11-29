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
    name: 'To Do',
    tasks: [{
      name: 'Task1-1',
      id: '7659',
      description: 'hi, do me!'
    },{
      name: 'Task1-2',
      id: '7949',
      description: 'hi, do-do-do me!'
    }],
  }, {
    id: '2',
    name: 'Done',
    tasks: [{
      name: 'Task2-1',
      id: '2554',
      description: 'hi, do me! *2'
    },
    {
      name: 'Task2-2',
      id: '2524',
      description: 'hi, do-do me! *2'
    }],
  }];
  allLists = [...this.columns.map(_ => _.name)];
}
