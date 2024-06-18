import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ collection: 'projects', versionKey: false })
export class Projects {
  _id?: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;
}

export type ProjectsDocument = Projects & Document;
export const ProjectsSchema = SchemaFactory.createForClass(Projects);
