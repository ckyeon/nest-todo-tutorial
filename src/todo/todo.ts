import { User } from '../auth/user';

export interface Todo {
  todo: string;
  done: boolean;
  due: Date;
  user: string | User;
}
