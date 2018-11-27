import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-header-layout',
  templateUrl: './user-header-layout.component.html',
  styleUrls: ['./user-header-layout.component.css']
})
export class UserHeaderLayoutComponent implements OnInit {

  error: string;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.userService.signOut().subscribe(data => this.router.navigateByUrl(''));
  }

}
