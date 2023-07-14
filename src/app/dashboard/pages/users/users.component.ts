import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  nameControl = new FormControl( null ,[Validators.required]);
  surnameControl = new FormControl( null, [Validators.required]);
  emailControl = new FormControl( null, [Validators.required]);
  passwordControl = new FormControl( null, [
    Validators.required,
    Validators.minLength(6)
]);

  userForm = new FormGroup({
      name: this.nameControl,
      surname: this.surnameControl,
      email: this.emailControl,
      password: this.passwordControl,
  })

  onSubmit() : void {
    console.log(this.userForm.value)
  }
}
