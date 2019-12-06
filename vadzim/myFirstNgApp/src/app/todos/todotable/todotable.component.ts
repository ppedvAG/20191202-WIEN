import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todotable',
  templateUrl: './todotable.component.html',
  styleUrls: ['./todotable.component.css']
})
export class TodotableComponent implements OnInit {
  todos: Todo[]

  constructor() { }

  ngOnInit() {
    this.getTodos
    ('https://jsonplaceholder.typicode.com/todos')
    /* : <Todo[]> */
    .then((array) => {
      this.todos = array;
    });
  }

  getTodos(url: string)
   /*  : Promise<T>  */
    {
    return fetch(url)
      .then(response => response.json
       /*  <{data: T}> */
        ())
     /*  .then(data => data.data) */
  }

}
