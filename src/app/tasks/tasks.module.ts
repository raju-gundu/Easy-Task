import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { SharedModule } from "../sharedUI/shared.module";



@NgModule({
    declarations: [NewTaskComponent,TasksComponent,TaskComponent],
    exports: [TasksComponent],
    imports: [SharedModule,CommonModule,FormsModule]
})

export class TasksModule {}