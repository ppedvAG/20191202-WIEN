import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosOverviewComponent } from './todos-overview/todos-overview.component';
import { TodotableComponent } from './todotable/todotable.component';
import { TodoService } from './todo.service';
import { MessageService } from './message.service';

@NgModule({
  declarations: [TodosOverviewComponent, TodotableComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TodosOverviewComponent
  ]
  /* ,
  providers: [
    TodoService,
    MessageService
  ], */
})
export class TodosModule { }
