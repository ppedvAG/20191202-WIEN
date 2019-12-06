import { Injectable } from '@angular/core';
import { TodosModule } from './todos.module';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Todo } from './models/todo';

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
