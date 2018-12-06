import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { UserService } from 'src/app/user.service';
import {UserSignIn} from './user.type';
import { User } from '../registration-page/user.type';
import { Store } from '@ngrx/store';
import * as fromRoot from '../_store/reducers';
import * as userAction from '../_store/actions/user';
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
    private store: Store<fromRoot.State>,
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
        let user: User = data.body;
        this.store.dispatch(new userAction.Set(user));
        this.router.navigateByUrl('board')
      },
        error => this.error = 'error');
    }


 }
