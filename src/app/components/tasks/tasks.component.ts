import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasksList: Task[] = [];
  taskName = "";

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    //Create a task object
    const task: Task = {
      name: this.taskName,
      status: false
    }

    //Add the task object to the array
    this.tasksList.push(task);

    //Reset input
    this.taskName = "";
  }

  updateTask(task: Task, index: number): void {
    this.tasksList[index].status = !task.status;
  }

  deleteTask(index: number): void {
    this.tasksList.splice(index, 1);
  }

}
