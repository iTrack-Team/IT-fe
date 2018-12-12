import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {

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

    getErrorMessageName() {
      return '';
    }

    getErrorMessageEmail() {
      return this.control.controls.email.hasError('required') ? 'You must enter a value' :
          this.control.controls.email.hasError('email') ? 'Not a valid email' :
              '';
    }

    getErrorMessagePassword() {
      return this.control.controls.email.hasError('required') ? 'You must enter a value' :
          '';
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
