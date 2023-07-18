import { Component, Inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  nameControl = new FormControl<string | null >( null ,[Validators.required]);
  surnameControl = new FormControl<string | null>( null, [Validators.required]);
  emailControl = new FormControl<string | null>( null, [Validators.required, Validators.email]);
  passwordControl = new FormControl<string | null>( null, [
    Validators.required,
    Validators.minLength(6)
  ])
  roleControl = new FormControl<string | null>(null, [Validators.required]);

  userForm = new FormGroup({
      name: this.nameControl,
      surname: this.surnameControl,
      email: this.emailControl,
      password: this.passwordControl,
      role: this.roleControl
  })

  constructor( private dialogRef: MatDialogRef<UserFormComponent>, @Inject(MAT_DIALOG_DATA) private data?: User,  ) {
    if(this.data) {
      this.nameControl.setValue(this.data.name)
      this.surnameControl.setValue(this.data.surname)
      this.emailControl.setValue(this.data.email)
      this.passwordControl.setValue(this.data.password)
      this.roleControl.setValue(this.data.role)
    }
  }

  onSubmit() : void {
    
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched()
    } else {
      this.dialogRef.close(this.userForm.value);
    }
  }
}
