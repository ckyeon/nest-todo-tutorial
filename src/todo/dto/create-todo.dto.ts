import { Todo } from '../todo';

export class CreateTodoDto implements Partial<Todo> {
  due: Date;
  name: string;
  todo: string;
}
