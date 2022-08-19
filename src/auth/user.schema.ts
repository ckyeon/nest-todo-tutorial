import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from './user';

@Schema({ collection: 'user' })
export class UserDocument extends Document implements User {
  @Prop({ type: String, required: true, trim: true, unique: true })
  email: string;

  @Prop({ type: String, required: true, trim: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
