import { Component } from '@angular/core';

import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'exc-user-header-layout',
  templateUrl: './user-header-layout.component.html',
  styleUrls: ['./user-header-layout.component.css']
})
export class UserHeaderLayoutComponent {

  userName = 'Dasha Shatrova';

  constructor(private userService: UserService,
    private router: Router) { }

  logOut() {
    this.userService.signOut().subscribe(data => this.router.navigateByUrl(''));
  }

}
