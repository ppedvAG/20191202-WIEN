import { Injectable } from '@angular/core';
import { TodosModule } from './todos.module';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Todo } from './models/todo';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  // providedIn: TodosModule
  providedIn: 'root'
})
export class TodoService {
  private todosUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private messService: MessageService,
    private http: HttpClient
  ) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.todosUrl)
    .pipe(
      tap(_ => this.log('fetched todos')),
      catchError(this.handleError('getTodos', []))
    )
  }

  getTodo(id: number): Observable<Todo> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Todo>(url)
    .pipe(
      tap(_ => this.log(`fetched todo id=${id}`)),
      // catchError(this.handleError(`getTodo id=${id}`, null))
      catchError(this.handleError(`getTodo id=${id}`, new Todo(0, '', false)))
      // warum unbedingt ein Objekt ???
      // catchError(this.handleError(`getTodo id=${id}`))
    )
  }

  updateTodo(todo: Todo): Observable<any> {
    return this.http.put(this.todosUrl + '/' + todo.id, todo, httpOptions)
    .pipe(
      tap(_ => this.log(`updated todo id=${todo.id}`)),
      catchError(this.handleError<any>('updateTodo', null))
    )
  }

  private handleError<T>(method = 'method', result: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${method} failed: ${error.message}`);
      return of(result as T);
    }
  }
  private log(arg0: string): void {
    this.messService.add(`TodoService: ${arg0}`);
  }
}
