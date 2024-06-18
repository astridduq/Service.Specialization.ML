import { Injectable, Logger } from '@nestjs/common';
import { Student, StudentDocument } from './student.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DatabaseConnection } from 'src/enums/database.connection';
import { StudentDto } from './student.dto';

@Injectable()
export class StudentService { 
  private readonly logger = new Logger(StudentService.name);
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}
  
  async createStudent(studentData: StudentDto): Promise<any> {
    this.logger.log("Iniciando la creación...")
    const newStudent = await this.studentModel.create(studentData);
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