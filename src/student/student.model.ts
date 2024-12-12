import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ collection: 'student', versionKey: false })
export class Student {
  
  _id?: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  idNumber: string;

  @Prop()
  email: string;

  @Prop()
  birthDate: Date;

  @Prop()
  startDate: Date;

  @Prop()
  certificate: string;

  @Prop()
  educationLevel: string;

  @Prop()
  countryCode: string;

  @Prop()
  cellphone: string;

  @Prop()
  password: string;

  @Prop()
  gender: string;

  @Prop()
  payment: boolean

}
export type StudentDocument = Student & Document;
export const StudentSchema = SchemaFactory.createForClass(Student);
