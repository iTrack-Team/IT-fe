import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from 'src/app/user.service';
import { HttpClient } from "selenium-webdriver/http";

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})

export class RegistrationComponent {
  hide: boolean = true;
  gotPassword: boolean = false;

  constructor(private userService: UserService) { }

  control: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  getErrorMessageName(){
    return '';
  }

  getErrorMessageSurname(){
    return '';
  }

  getErrorMessageEmail(){
    return this.control.controls.email.hasError('required') ? 'You must enter a value' :
      this.control.controls.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getPasswordForRegistration(){
    const body = {
      name: this.control.controls.name.value,
      surname: this.control.controls.surname.value,
      email: this.control.controls.email.value,
    };
    this.userService.registrate(body).subscribe();
  }
}
