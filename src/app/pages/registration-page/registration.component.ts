import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {

    control: FormGroup = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
    });
    // email = new FormControl('', [Validators.required, Validators.email]);

    getErrorMessage() {
      return this.control.controls.email.hasError('required') ? 'You must enter a value' :
          this.control.controls.email.hasError('email') ? 'Not a valid email' :
              '';
    }
 }

 export class FormFieldPrefixSuffixExample {
  hide = true;
}
