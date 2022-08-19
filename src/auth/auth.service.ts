import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { compareSync, hashSync } from 'bcrypt';
import { Model } from 'mongoose';
import { JoinUserDto } from './dto/join-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UserDocument } from './user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserDocument.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async join(dto: JoinUserDto): Promise<void> {
    dto.password = hashSync(dto.password, 12);
    await this.userModel.create(dto);
  }

  async login(dto: LoginUserDto): Promise<any> {
    const user: UserDocument = await this.userModel.findOne({
      email: dto.email,
    });

    if (compareSync(dto.password, user.password)) {
      const payload = { _id: user._id };
      return { accessToken: this.jwtService.sign(payload) };
    }
  }
}
