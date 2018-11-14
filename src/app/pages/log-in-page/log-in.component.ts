import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
}) 
 export class LogInComponent {
  
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