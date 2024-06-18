import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Projects } from 'src/projects/projects.model';
import { Student } from 'src/student/student.model';

@Schema({ collection: 'teams', versionKey: false })
export class Teams {
  _id?: Types.ObjectId;

  @Prop()
  students: Array<Student>;

  @Prop()
  qualification: number;

  @Prop()
  projects: Array<Projects>;

}

export type TeamsDocument = Teams & Document;
export const TeamsSchema = SchemaFactory.createForClass(Teams);
