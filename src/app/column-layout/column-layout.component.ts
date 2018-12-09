import { Component, Input } from '@angular/core';
import { addTask, Task } from '../_types/task.type';
import { BoardService } from '../board.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'exc-column-layout',
  templateUrl: 'column-layout.component.html',
  styleUrls: ['column-layout.component.css'],
})
export class ColumnLayoutComponent {
  @Input() columns: Array<Object>;
  @Input() allLists;

  constructor(private boardService: BoardService) {
  }

  ngAfterViewChecked(){
    this.autogrow();
  }

  ngAfterViewInit() {
    this.autogrow();
  }

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

  autogrow() {
    let textArea = document.getElementsByClassName("textarea")
    for (let i = 0; i < textArea.length; i++) {
      if (+(<HTMLElement>textArea[i]).style.height.split('px')[0] < 300) {
        (<HTMLElement>textArea[i]).style.overflow = 'hidden';
      } else {
        (<HTMLElement>textArea[i]).style.overflowY = 'auto';
      }
      (<HTMLElement>textArea[i]).style.height = '0px';
      (<HTMLElement>textArea[i]).style.height = (<HTMLElement>textArea[i]).scrollHeight + 'px';
    }
  }

  addTask(columnId: string) {
    const taskName = (<HTMLInputElement>document.getElementById(`input-task-name-${columnId}`)).value;
    const taskDescription = (<HTMLInputElement>document.getElementById(`input-task-description-${columnId}`)).value;
    const task: addTask = {
      columnId,
      taskName,
      taskDescription,
    };
    this.boardService.addTask(task).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
  }

  changeTask(id: string){
    const name = (<HTMLInputElement>document.getElementById(`change-task-name-${id}`)).value;
    const description = (<HTMLInputElement>document.getElementById(`change-task-description-${id}`)).value;
    const task: Task = {
      id,
      name,
      description,
    };
    this.boardService.putTask(task).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
  }

  deleteColumn(columnId) {
    this.boardService.deleteColumn(columnId).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
  }

}
