import { Component,computed,EventEmitter,Input,input, Output,output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../sharedUI/card/card.component";

// type User = {
//   id: String;
//   name: String;
//   avatar: String;
// };



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /******using just inputs******/
  @Input({required: true}) user!: User
  @Input({required: true}) selected!: Boolean;
  @Output() clickedUser = new EventEmitter();
  
  
  get userImagePath(){
    return 'assets/users/' + this.user.avatar;
  }

   /****using signal inputs *****/
  // avatar = input.required<string>();
  // name = input.required<string>();
  // userImagePath = computed(() => {return 'assets/users/'+this.avatar()});
  
  /****using signal outputs *****/
  // clickedUser = output<String>();

  onUserClicked(){
    this.clickedUser.emit(this.user.id);
  }
}
