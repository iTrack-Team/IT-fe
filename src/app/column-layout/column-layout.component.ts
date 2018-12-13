import { Component, Input } from '@angular/core';
import { Task, moveTask, Column } from '../_types/task.type';
import { BoardService } from '../board.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'exc-column-layout',
  templateUrl: 'column-layout.component.html',
  styleUrls: ['column-layout.component.css'],
})
export class ColumnLayoutComponent {
  @Input() columns: Array<Column>;
  @Input() allLists;

  constructor(private boardService: BoardService, private router: Router) {
  }

  ngAfterViewChecked() {
    this.autogrow();
  }
  ngOnChanges() {
    this.autogrow();
  }
  ngAfterViewInit() {
    this.autogrow();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const moveInfo: moveTask = {
        columnFrom: event.previousContainer.id,
        columnTo: event.container.id,
      };
      const id = (<any>event.previousContainer.data[event.previousIndex])._id;
      this.boardService.moveTask(moveInfo, id).subscribe(data => {
        this.columns = data.body.columns;
      },
        error => console.log(error));
    }
  }

  autogrow() {
    let textArea = document.getElementsByClassName("textarea")
    for (let i = 0; i < textArea.length; i++) {
      if (+(<HTMLElement>textArea[i]).style.height.split('px')[0] < 200) {
        (<HTMLElement>textArea[i]).style.overflow = 'hidden';
      } else {
        (<HTMLElement>textArea[i]).style.overflowY = 'auto';
      }
      (<HTMLElement>textArea[i]).style.height = '0px';
      (<HTMLElement>textArea[i]).style.height = (<HTMLElement>textArea[i]).scrollHeight + 'px';
    }
  }

  addTask(columnId: string) {
    const name = (<HTMLInputElement>document.getElementById(`input-task-name-${columnId}`)).value;
    const description = (<HTMLInputElement>document.getElementById(`input-task-description-${columnId}`)).value;
    const task: Task = {
      name,
      description,
    };
    this.boardService.addTask(task, columnId).subscribe(data => {
      this.columns = data.body.columns;
      this.autogrow();
    },
      error => console.log(error));
  }

  changeTask(id: string) {
    const name = (<HTMLInputElement>document.getElementById(`change-task-name-${id}`)).value;
    const description = (<HTMLInputElement>document.getElementById(`change-task-description-${id}`)).value;
    const task: Task = {
      name,
      description,
    };
    this.boardService.putTask(task, id).subscribe(data => {
      this.columns = data.body.columns;
    },
      error => console.log(error));
  }

  deleteColumn(columnId) {
    this.boardService.deleteColumn(columnId).subscribe(data => {
      this.columns = data.body.columns;
      this.allLists = [...this.columns.map(item => item._id )];
    },
      error => console.log(error));
  }

  changeColumnName(id) {
    const name = (<HTMLInputElement>document.getElementById(`input-column-name-${id}`)).value;
    this.boardService.putColumnName(name, id).subscribe(data => {
      this.columns = data.body.columns;
    },
      error => console.log(error));
  }

  deleteTask(columnId, taskId) {
    this.boardService.deleteTask(columnId, taskId).subscribe(data => {
      this.columns = data.body.columns;
    },
      error => console.log(error));
  }
}
