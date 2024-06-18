import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TeacherDto } from './teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
    constructor(private readonly teacherService: TeacherService) {}

  @Post()
  async create(@Body() createTeacherDto: TeacherDto) {
    return this.teacherService.createTeacher(createTeacherDto);
  }

  @Get()
  async getTeachers() {
    return this.teacherService.getTeachers();
  }

  @Get(':id')
  async getTeacherById(@Param('id') id: string) {
    return this.teacherService.getTeacherId(id);
  }
}