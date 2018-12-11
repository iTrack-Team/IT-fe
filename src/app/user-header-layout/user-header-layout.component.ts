import { Component, Input } from '@angular/core';

import { UserService } from 'src/app/user.service';
import { BoardService } from 'src/app/board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'exc-user-header-layout',
  templateUrl: './user-header-layout.component.html',
  styleUrls: ['./user-header-layout.component.css']
})
export class UserHeaderLayoutComponent {
  @Input() boardName: string;

  constructor(
    private userService: UserService,
    private boardService: BoardService,
    private router: Router,
  ) {
  }

  logOut() {
    this.userService.signOut().subscribe(data => this.router.navigateByUrl(''), error => console.log(error));
  }

  changeBoardName() {
    const name = (<HTMLInputElement>document.getElementById(`input-board-name`)).value;
    this.boardService.changeBoardName(name).subscribe(data => this.router.navigateByUrl('board'), error => console.log(error));
  }

}
