import { IsNotEmpty, IsString, IsEmail, IsOptional, IsMongoId, IsArray } from 'class-validator';

export class TeacherDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  cellphone: string;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true }) // Validates that each item in the array is a valid MongoDB ObjectId
  courses?: string[]; 
}
