import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Todo } from '../todo';

export class CreateTodoDto implements Partial<Todo> {
  @IsDate()
  @IsNotEmpty()
  due: Date;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  todo: string;

  user: string;
}
