import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todotable',
  templateUrl: './todotable.component.html',
  styleUrls: ['./todotable.component.css']
})
export class TodotableComponent implements OnInit {
  todos: Todo[]

  constructor(private tService: TodoService) { }

  ngOnInit() {
    this.getTodos();
/*     this.getTodos
    ('https://jsonplaceholder.typicode.com/todos')
       .then((array) => {
      this.todos = array;
    }); */
  }

  getTodos(): void {
    this.tService.getTodos()
    .subscribe(todos => this.todos = todos);
  }

  /* getTodos(url: string) {
    return fetch(url)
      .then(response => response.json())
  } */

}
