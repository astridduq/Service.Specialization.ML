import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StudentDto } from './student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() createStudentDto: StudentDto) {
    return this.studentService.createStudent(createStudentDto);
  }

  @Get()
  async getStudents() {
    return this.studentService.getStudents();
  }

  @Get(':id')
  async getStudentById(@Param('id') id: string) {
    return this.studentService.getStudentId(id);
  }
}
