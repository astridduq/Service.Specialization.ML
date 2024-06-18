import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Student } from 'src/student/student.model';

@Schema({ collection: 'course', versionKey: false })
export class Course {
  _id?: Types.ObjectId;

  @Prop()
  name: String;

  @Prop()
  description: String;

  @Prop()
  idInstructor: number;

  @Prop()
  students: Array<Student>;

  @Prop()
  resources: Array<string>;
  
}

export type CourseDocument = Course & Document;
export const CourseSchema = SchemaFactory.createForClass(Course);