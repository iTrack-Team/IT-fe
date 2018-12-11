import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';

@Component({
  selector: 'exc-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.css']
})
export class BoardPageComponent implements OnInit {
  board;
  allLists;

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.getBoard().subscribe(data => {
      this.board = data.body;
      this.allLists = [...this.board.columns.map(item => item._id)];
    },
      error => console.log(error));
  }
}
