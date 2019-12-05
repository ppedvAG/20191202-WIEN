import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosOverviewComponent } from './todos-overview/todos-overview.component';



@NgModule({
  declarations: [TodosOverviewComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TodosOverviewComponent
  ]
})
export class TodosModule { }
