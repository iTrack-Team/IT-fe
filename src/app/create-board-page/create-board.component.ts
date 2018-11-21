import { Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'create-board',
  templateUrl: './create-board.component.html',
  styleUrls: ['./create-board.component.css'],
})
export class CreateBoardComponent {

  hide = true;
  log = true;
  pas = true;
  userService: UserService;

    control: FormGroup = new FormGroup({

    });

    getErrorMessageName() {
      return '';
    }

 }
