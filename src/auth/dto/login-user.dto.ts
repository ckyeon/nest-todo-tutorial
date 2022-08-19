import { IsNotEmpty, IsString } from 'class-validator';
import { User } from '../user';

export class LoginUserDto implements Partial<User> {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
