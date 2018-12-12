import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'get-new-password',
  templateUrl: './get-new-password.component.html',
  styleUrls: ['./get-new-password.component.css'],
})
export class GetNewPasswordComponent {

  hide = true;
  log = true;
  pas = true;
  error: string;

  constructor(
    private userService: UserService,
    private router: Router,
    ) { }

    control: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    getErrorMessageEmail() {
      return this.control.controls.email.hasError('required') ? 'You must enter a value' :
          this.control.controls.email.hasError('email') ? 'Not a valid email' :
              '';
    }

    getPasswordIfForgot() {
        const body = {
          email: this.control.controls.email.value,
        };
        this.userService.getNewPassword(body).subscribe(data => this.router.navigateByUrl('login'),
        error => this.error = 'error');
      }

      tryLogIn() {
        const body = {
          email: this.control.controls.email.value,
          password: this.control.controls.password.value,
        };
        this.userService.signIn(body).subscribe(data => {
          this.router.navigateByUrl('board');
             },
          error => this.error = 'Check entered data');
      }
}
