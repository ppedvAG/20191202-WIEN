import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LabsModule } from './labs/labs.module';
import { TodosModule } from './todos/todos.module';
import { LabsOverviewComponent } from './labs/labs-overview/labs-overview.component'
import { TodosOverviewComponent } from './todos/todos-overview/todos-overview.component';

const routes: Routes = [
  {path: 'labs', component: LabsOverviewComponent},
  {path: 'todos', component: TodosOverviewComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LabsModule,
    TodosModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
