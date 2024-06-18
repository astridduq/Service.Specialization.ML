import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Course, CourseSchema } from './course.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Course.name, schema: CourseSchema }]),
  ],
  providers: [CourseService]
})
export class CourseModule {}
