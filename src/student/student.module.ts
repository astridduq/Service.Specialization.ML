import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema, Student } from './student.model';
import { DatabaseConnection } from '../enums/database.connection';
import { StudentService } from './student.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
      ],
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentsModule {}
