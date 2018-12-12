import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {

  hide = true;
  log = true;
  pas = true;
  error: string;

  constructor(
    private userService: UserService,
    private router: Router,
    ) { }

    control: FormGroup = new FormGroup({
        oldPassword: new FormControl('', [Validators.required]),
        newPassword: new FormControl('', [Validators.required]),
    });

    changePassword() {
        const body = {
            oldPass: this.control.controls.oldPassword.value,
            newPass: this.control.controls.newPassword.value,
        };
        this.userService.changePassword(body).subscribe(data => this.router.navigateByUrl('/login'),
        error => this.error = 'error');
      }

}
