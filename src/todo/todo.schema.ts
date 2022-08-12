import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Todo } from './todo';

@Schema({ collection: 'todo' })
export class TodoDocument extends Document implements Todo {
  @Prop({ type: Boolean, default: false })
  done: boolean;

  @Prop({ type: Date, required: true })
  due: Date;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true, trim: true })
  todo: string;
}

export const TodoSchema = SchemaFactory.createForClass(TodoDocument);
