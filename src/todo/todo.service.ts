import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoDocument } from './todo.schema';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(TodoDocument.name) private todoModel: Model<TodoDocument>,
  ) {}

  // CRUD
  // Create
  async create(dto: CreateTodoDto): Promise<TodoDocument> {
    return this.todoModel.create(dto);
  }

  // Read
  async findAll(): Promise<TodoDocument[]> {
    return this.todoModel.find();
  }

  // Update
  async update(id: string, dto: UpdateTodoDto): Promise<TodoDocument> {
    return this.todoModel.findOneAndUpdate({ _id: id }, dto);
  }

  // Delete
  async delete(id: string): Promise<TodoDocument> {
    return this.todoModel.findOneAndDelete({ _id: id });
  }
}
