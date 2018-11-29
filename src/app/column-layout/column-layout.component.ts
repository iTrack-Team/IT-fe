import {Component, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'exc-column-layout',
  templateUrl: 'column-layout.component.html',
  styleUrls: ['column-layout.component.css'],
})
export class ColumnLayoutComponent {
  @Input() columns;
  @Input() allLists;

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  addTaskToDo(event: CdkDragDrop<string[]>){

  }
}
