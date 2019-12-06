import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosOverviewComponent } from './todos-overview/todos-overview.component';
import { TodotableComponent } from './todotable/todotable.component';



@NgModule({
  declarations: [TodosOverviewComponent, TodotableComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TodosOverviewComponent
  ]
})
export class TodosModule { }
