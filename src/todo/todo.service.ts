import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './todo';

@Injectable()
export class TodoService {
  todos: Todo[] = [];

  // CRUD
  // Create
  create(dto: CreateTodoDto): Todo {
    this.todos.push({
      id: this.todos.length + 1,
      ...dto,
      done: false,
    });

    return this.todos[this.todos.length - 1];
  }

  // Read
  findAll(): Todo[] {
    return this.todos;
  }

  // Update
  update(id: number, dto: UpdateTodoDto): Todo {
    const idx = this.todos.findIndex((todo) => todo.id === id);
    this.todos[idx] = { ...this.todos[idx], ...dto } as Todo;
    return this.todos[idx];
  }

  // Delete
  delete(id: number): Todo {
    const idx = this.todos.findIndex((todo) => todo.id === id);
    const deleteTodo = this.todos[idx];

    this.todos.forEach((todo, index) => {
      if (todo.id > id) {
        this.todos[index].id--;
      }
    });
    this.todos.splice(idx, 1);

    return deleteTodo;
  }
}
