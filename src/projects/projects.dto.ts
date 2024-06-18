import { IsNotEmpty, IsString, IsDate, IsOptional } from 'class-validator';

export class ProjectDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;
}
