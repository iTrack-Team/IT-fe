import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})

export class RegistrationComponent {
  hide: boolean = true;
  log: boolean = true;
  pas: boolean = false;
  userService: UserService;

  control: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  getErrorMessageName(){
    return '';
  }

  getErrorMessageEmail(){
    return this.control.controls.email.hasError('required') ? 'You must enter a value' :
      this.control.controls.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  tryRegistration(){
    const body = {
      name: this.control.controls.name.value,
      email: this.control.controls.email.value,
    };
    this.userService.registrate(body).subscribe();
  }
}
