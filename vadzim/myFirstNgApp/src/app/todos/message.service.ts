/* message.sevice.ts */
import { Injectable } from '@angular/core';
import { TodosModule } from './todos.module';

@Injectable({
  // providedIn: TodosModule
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  constructor() { }
  add(message: string) {
    this.messages.push(message);
  }
  clear(){
    this.messages = [];
  }
}
