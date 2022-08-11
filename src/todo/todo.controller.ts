import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './todo';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  // Create
  @Post()
  create(@Body() dto: CreateTodoDto): Todo {
    return this.todoService.create(dto);
  }

  // Read
  @Get()
  findAll() {}

  //Update
  @Put()
  update() {}

  //Delete
  @Delete()
  delete() {}
}
