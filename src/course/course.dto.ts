// create-course.dto.ts
import { IsString, IsNotEmpty, IsMongoId, IsOptional, IsArray } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional() // Description could be optional initially
  description?: string;

  @IsMongoId()
  idInstructor: string;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true })
  students?: string[]; // Array of student IDs

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  resources?: string[]; // Array of resource URLs/identifiers
}

