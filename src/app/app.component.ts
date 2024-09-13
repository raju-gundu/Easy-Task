import { Component } from '@angular/core';
import { DUMMY_USERS } from './user/dummy-users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: String;

  get selectedUser(){
    return this.users.find((user)=> user.id === this.selectedUserId );
  }
  onSelectUser(id:string){
    this.selectedUserId=id;
  }
}
