import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-column',
  template: `
  <div *ngIf="allLists" class="example-container">
    <h2>{{column.name}}</h2>
    <div cdkDropList id="{{column.name}}"
    [cdkDropListData]="column.tasks"
    [cdkDropListConnectedTo]="allLists"
    class="example-list"
      (cdkDropListDropped)="drop($event)">
      <exc-task-layout *ngFor="let item of column.tasks" cdkDrag [id]="item.id" [name]="item.name" [description]="item.description"></exc-task-layout>
    </div>
    <div class="create-task">
      <div class="task-name"><span style="margin: auto">Task Name</span></div>
      <div class="task-description"><span style="margin: auto">Task Description</span></div>
      <div (click)="addTask()" class="task-add-button"><span style="margin: auto">add Task</span></div>
    </div>
  </div>
  `,
  styleUrls: ['column-layout.component.css'],
})
export class Column {
  @Input() column;
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
}
