import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';

@Component({
  selector: 'exc-board-layout',
  templateUrl: './board-layout.component.html',
  styleUrls: ['./board-layout.component.css']
})
export class BoardLayoutComponent implements OnInit {
  userId;

  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
  columns = [{
    id: '1',
    name: 'To Do',
    tasks: [{
      name: 'KC lab_10',
      id: '7659',
      description: 'Killed'
    }, {
      name: 'UMF 6',
      id: '7949',
      description: 'no time...'
    }, {
      name: 'UMF 7',
      id: '7949',
      description: 'no time...\nplease\ndo not do it\npleaseeeeee'
    }, {
      name: 'UMF 8',
      id: '7949',
      description: 'no time...'
    }],
  }, {
    id: '2',
    name: 'Done',
    tasks: [{
      name: 'UMF 4',
      id: '2554',
      description: 'Need 5th december'
    },
    {
      name: 'Отработка физры',
      id: '2524',
      description: 'Еще 15 пар..'
    }],
  }];
  allLists = [...this.columns.map(_ => _.id)];
  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.getBoard().subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
  }
}
