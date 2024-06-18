import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ collection: 'student', versionKey: false })
export class Student {
  
  _id?: Types.ObjectId;

  @Prop()
  fullName: string;

  @Prop()
  email: string;

  @Prop()
  dateOfBirth: Date;

  @Prop()
  startDate: Date;

  @Prop()
  certificate: string;

  @Prop()
  educationLevel: string;

  @Prop()
  cellphone: string;

  @Prop()
  password: string;

  @Prop()
  genre: string;

  @Prop()
  payment: boolean

}
export type StudentDocument = Student & Document;
export const StudentSchema = SchemaFactory.createForClass(Student);
