import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosOverviewComponent } from './todos-overview/todos-overview.component';
import { TodotableComponent } from './todotable/todotable.component';
import { TodoService } from './todo.service';
import { MessageService } from './message.service';
import { EdittodoComponent } from './edittodo/edittodo.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [TodosOverviewComponent, TodotableComponent, EdittodoComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
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
