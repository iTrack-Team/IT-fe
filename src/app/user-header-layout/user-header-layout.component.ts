import { Component } from '@angular/core';

import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as userReducer from '../_store/reducers/user';
import { User } from '../registration-page/user.type';

@Component({
  selector: 'exc-user-header-layout',
  templateUrl: './user-header-layout.component.html',
  styleUrls: ['./user-header-layout.component.css']
})
export class UserHeaderLayoutComponent {
  userName: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private store: Store<userReducer.State>,
  ) {
    store.select(userReducer.getUser).subscribe((user) => {
      user = user.user;
      this.userName = `${user.name} ${user.surname}`;
    });


  }

  logOut() {
    this.userService.signOut().subscribe(data => this.router.navigateByUrl(''));
  }

}
