import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { User } from '../user';

export class JoinUserDto implements Partial<User> {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
