import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent implements OnInit {

  @Input() todo: Todo;

  constructor(
    private ts: TodoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTodo();
  }

  getTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ts.getTodo(id)
    .subscribe(todo => this.todo = todo);
  }

  save(): void {
    this.ts.updateTodo(this.todo)
    .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
