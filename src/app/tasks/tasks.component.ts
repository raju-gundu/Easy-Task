import { Component,EventEmitter,Input, Output } from '@angular/core';
import { TaskComponent as TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';



@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required: true}) userId!:String
@Input({required: true}) name!:String

constructor(private tasksService : TasksService){}
isAddingTask = false;

get selectedUserTasks(){
  return this.tasksService.getUserTasks(this.userId);
}

onAddingTask(){
  
  this.isAddingTask = true;
}

onCloseAddTask(){
  this.isAddingTask = false;
}


}
