import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Course } from 'src/course/course.model';

@Schema({ collection: 'videos', versionKey: false })
export class Videos {
  
  _id?: Types.ObjectId;

  @Prop()
  videoUrl: string;

  @Prop()
  course: Array<Course>;

}

export type VideosDocument = Videos & Document;
export const VideosSchema = SchemaFactory.createForClass(Videos);
