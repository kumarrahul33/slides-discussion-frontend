import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks: any[] = [];
  showTasks: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  // make a get request to 127:0.0.1:8000/api/tasks/tasks to get all tasks in json format and store it in tasks
  getTasks = () => {
    fetch('http://127.0.0.1:8000/api/tasks/').then(response => response.json()).then(data => {
      this.tasks = data;
    });
    // this.printTasks();
  }

  //prints the tasks in the console

  // toggles the showTasks boolean
  // toggleShowTasks = () =>  {
  //   console.log(this.tasks);
  //   this.showTasks = !this.showTasks;
  // }

}
