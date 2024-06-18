import { Injectable, Logger } from '@nestjs/common';
import { Course, CourseDocument } from './course.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DatabaseConnection } from 'src/enums/database.connection';


@Injectable()
export class CourseService { 
  private readonly logger = new Logger(CourseService.name);
  constructor(
    @InjectModel(Course.name) private courseModel: Model<CourseDocument>,
  ) {}
  
  async createCourse(courseData: any): Promise<any> {
    this.logger.log("Iniciando la creación...")
    const newCourse = await this.courseModel.create(courseData);
    return {status: true,
      newCourse
    };
}

  async getCourses() {
    return this.courseModel.find();
 }

 async getCourseId(id:string) {
    return this.courseModel.findById(id);
 } 

}