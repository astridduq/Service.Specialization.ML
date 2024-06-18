import { Injectable, Logger } from '@nestjs/common';
import { Teacher, TeacherDocument } from './teacher.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DatabaseConnection } from 'src/enums/database.connection';

@Injectable()
export class TeacherService { 
  private readonly logger = new Logger(TeacherService.name);
  constructor(
    @InjectModel(Teacher.name) private teacherModel: Model<TeacherDocument>,
  ) {}
  
  async createTeacher(teacherData: any): Promise<any> {
    this.logger.log("Iniciando la creación...")
    const newTeacher = await this.teacherModel.create(teacherData);
    return {status: true,
      newTeacher
    };
}

  async getTeachers() {
    return this.teacherModel.find();
 }

 async getTeacherId(id:string) {
    return this.teacherModel.findById(id);
 } 

}