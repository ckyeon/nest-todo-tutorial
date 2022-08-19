import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { User } from '../auth/user';
import { Todo } from './todo';

@Schema({ collection: 'todo' })
export class TodoDocument extends Document implements Todo {
  @Prop({ type: Boolean, default: false })
  done: boolean;

  @Prop({ type: Date, required: true })
  due: Date;

  @Prop({ type: String, required: true, trim: true })
  todo: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
  user: string | User;
}

export const TodoSchema = SchemaFactory.createForClass(TodoDocument);
