import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Course } from 'src/course/course.model';

@Schema({ collection: 'teacher', versionKey: false })
export class Teacher {
  _id?: Types.ObjectId;

  @Prop()
  fullName: string;

  @Prop()
  email: string;

  @Prop()
  cellphone: string;

  @Prop()
  course: Array<string>;

}
export type TeacherDocument = Teacher & Document;
export const TeacherSchema = SchemaFactory.createForClass(Teacher);