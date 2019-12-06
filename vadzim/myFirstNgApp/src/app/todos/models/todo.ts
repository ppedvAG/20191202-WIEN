export class Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
  constructor(userId: number, title: string, completed: boolean) {
    this.userId = userId;
    this.title = title;
    this.completed = completed;
  }
}
