import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {
  constructor(private http: HttpClient) { }

// ngOnInit(): void {
// }
func1() {
  this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((response: any) => {
    console.log(response);
    
  }, );
}
}