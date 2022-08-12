import { Todo } from '../todo';

export class UpdateTodoDto implements Partial<Todo> {
  done: boolean;
  todo: string;
  due: Date;
}
