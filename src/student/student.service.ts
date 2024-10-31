import { Injectable, Logger } from '@nestjs/common';
import { Student, StudentDocument } from './student.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { StudentDto } from './student.dto';

@Injectable()
export class StudentService { 
  private readonly logger = new Logger(StudentService.name);
  startDate: Date;
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {
    this.startDate = new Date();
  }
  
  async createStudent(studentData: StudentDto): Promise<any> {
    this.logger.log("Iniciando la creación...")
    const newStudentData = {
      ...studentData,
      startDate: new Date(),
    };
    const newStudent = await this.studentModel.create(newStudentData);
    return {
      status: true
    };
}
  async getStudents() {
    return this.studentModel.find();
 }

  async getStudentId(id:string) {
    return this.studentModel.findById(id);
 } 
}