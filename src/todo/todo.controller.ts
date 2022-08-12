import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
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
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  //Update
  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateTodoDto): Todo {
    return this.todoService.update(Number(id), dto);
  }

  //Delete
  @Delete(':id')
  delete(@Param('id') id: number): Todo {
    return this.todoService.delete(Number(id));
  }
}
