import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo';

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  // CRUD
  // Create
  create(dto: CreateTodoDto): Todo {
    this.todos.push({
      ...dto,
      done: false,
    });

    return this.todos[this.todos.length - 1];
  }

  // Read
  findAll() {}

  // Update
  update() {}

  // Delete
  delete() {}
}
