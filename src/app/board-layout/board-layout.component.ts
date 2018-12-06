import { Component, OnInit } from '@angular/core';
import { BoardService } from '../board.service';
import { Store } from '@ngrx/store';
import * as userReducer from '../_store/reducers/user';

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
      name: 'UMF 5',
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
  allLists = [...this.columns.map(_ => _.name)];
  constructor(
    private boardService: BoardService,
    private store: Store<userReducer.State>,
  ) { }
  ngOnInit() {
    this.store.select(userReducer.getUser).subscribe((user) => {
      user = user.user;
      this.userId = user.id;
    });

    this.boardService.getBoard(this.userId).subscribe(data => {
      console.log(data);
    },
      error => console.log(error));
  }
}
