import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';
import { Todo } from '../todo';

export class UpdateTodoDto implements Partial<Todo> {
  @IsBoolean()
  @IsOptional()
  done: boolean;

  @IsString()
  @IsOptional()
  todo: string;

  @IsDate()
  @IsOptional()
  due: Date;
}
