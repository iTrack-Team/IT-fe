import { Component, Input } from '@angular/core';
import { BoardService } from '../board.service';

@Component({
  selector: 'exc-board-layout',
  templateUrl: './board-layout.component.html',
  styleUrls: ['./board-layout.component.css']
})
export class BoardLayoutComponent {
  @Input() columns;
  @Input() allLists;

  constructor(private boardService: BoardService) {}

  addColumn() {
    const name = (<HTMLInputElement>document.getElementById(`input-column-name`)).value;
    this.boardService.addColumn(name).subscribe(data => {
      this.columns = data.body.columns;
      (<HTMLInputElement>document.getElementById(`input-column-name`)).value = '';
    },
      error => console.log(error));
  }
}
