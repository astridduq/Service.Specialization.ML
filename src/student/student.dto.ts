import { IsString, IsEmail, IsDateString, IsOptional, } from 'class-validator';


export class StudentDto {
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsDateString()
  dateOfBirth: string;

  @IsDateString()
  startDate: string;

  @IsString()
  certificate: string;

  @IsString()
  educationLevel: string;

  @IsString()
  cellphone: string;

  @IsString()
  password: string;

  @IsString()
  genero: string;

  @IsOptional()
    payment?: boolean;
}
