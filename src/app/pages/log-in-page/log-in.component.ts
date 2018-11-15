import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule, MatToolbarModule, MatIconModule} from '@angular/material';


@Component({
  selector: 'login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {

    control: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.email, Validators.required]),
    });

    hide = true;
    
    getErrorMessageEmail() {
      return this.control.controls.email.hasError('required') ? 'You must enter a value' :
          this.control.controls.email.hasError('email') ? 'Not a valid email' :
              '';
    }
    getErrorMessagePassword() {
      return this.control.controls.email.hasError('required') ? 'You must enter a value' :
          this.control.controls.email.hasError('password') ? 'Not a valid email' :
              '';
    }
 }

//  export class FormFieldPrefixSuffixExample {
//   hide = true;
// }
