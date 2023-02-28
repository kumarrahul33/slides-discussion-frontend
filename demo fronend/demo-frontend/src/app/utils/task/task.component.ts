import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() public task: any;

  taskID: number = 0;
  taskTitle: string = '';
  taskCompleted: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.taskID = this.task.id;
    this.taskTitle = this.task.title;
    this.taskCompleted = this.task.completed;
  }
  

}
