import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoDocument } from './todo.schema';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  // Create
  @UseGuards(JwtGuard)
  @Post()
  async create(
    @Request() req,
    @Body() dto: CreateTodoDto,
  ): Promise<TodoDocument> {
    dto.user = req.user.userId;
    return this.todoService.create(dto);
  }

  // Read
  @Get()
  async findAll(): Promise<TodoDocument[]> {
    return this.todoService.findAll();
  }

  //Update
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateTodoDto,
  ): Promise<TodoDocument> {
    return this.todoService.update(id, dto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<TodoDocument> {
    return this.todoService.delete(id);
  }
}
