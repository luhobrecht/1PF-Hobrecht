import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from './components/user-form/user-form.component';
import { User } from './models';


const ELEMENT_DATA: User[] = [
  {id: 1, name: 'Harry', surname: 'Potter', email: 'hp@magic.com', password: '123456', role: 'alumno'},
  {id: 2, name: 'Ron', surname: 'Weasly', email: 'rw@magic.com', password: '123456', role: 'alumno'},
  {id: 3, name: 'Hermione', surname: 'Granger', email: 'hg@magic.com', password: '123456', role: 'alumno'},
  {id: 4, name: 'Luna', surname: 'Lovegood', email: 'll@magic.com', password: '123456', role: 'alumno'},
  {id: 5, name: 'Neville', surname: 'Longbottom', email: 'nl@magic.com', password: '123456', role: 'alumno'}
];


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  public users: User[] = ELEMENT_DATA;
  constructor(
    private matDialog : MatDialog
  ) {}
  
  onCreateUser() : void {
    const dialogRef = this.matDialog.open(UserFormComponent)

    dialogRef.afterClosed().subscribe({
      next: (v) => {
        if (v) {
          this.users = [
            ...this.users,
            {
              id: this.users.length + 1,
              name: v.name,
              surname: v.surname,
              email: v.email,
              password: v.password,
              role: v.role
            }
          ] 
        } else {
          console.log("Se canceló")
        }
      } 
    })
  }

  onDeleteUser(user: User) : void {
    if (confirm(`¿Quieres eliminar a ${user.name}?`)) {
      this.users = this.users.filter((u) => u.id !== user.id)
    }
  }

  onEditUser (userToEdit: User) : void {
    const dialogRef = this.matDialog.open(UserFormComponent, { data: userToEdit});
    dialogRef.afterClosed().subscribe({
      next: (userUpdated) => {
        if (userUpdated) {
          this.users = this.users.map((user) => {
            return user.id === userToEdit.id
              ? {...user, ...userUpdated}
              : user 
          })
        }
      } 
    })
  }
}
