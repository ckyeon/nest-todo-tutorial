import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JoinUserDto } from './dto/join-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('join')
  async join(@Body() dto: JoinUserDto): Promise<void> {
    await this.authService.join(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginUserDto): Promise<any> {
    return this.authService.login(dto);
  }
}
