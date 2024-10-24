import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { CourseModule } from './course/course.module';
import { TeacherModule } from './teacher/teacher.module';
import { ProjectsModule } from './projects/projects.module';
import { VideosModule } from './videos/videos.module';
import { TeamsModule } from './teams/teams.module';
import { MongooseModule } from '@nestjs/mongoose';
import config = require('config');
import { DatabaseConnection } from './enums/database.connection';
import { StudentController } from './student/student.controller';

@Module({
  imports: [
    MongooseModule.forRoot(config.get('db.mongoURI'),{dbName:DatabaseConnection.ESPECIALIZACION_ML_ROOT}),
  StudentModule, CourseModule, TeacherModule, ProjectsModule, VideosModule, TeamsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
