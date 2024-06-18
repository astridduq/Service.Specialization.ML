import { IsNotEmpty, IsArray, IsMongoId, IsNumber, IsOptional } from 'class-validator';

export class TeamsDto {
  @IsNotEmpty()
  @IsArray()
  @IsMongoId({ each: true }) // Valida que cada elemento sea un ObjectId válido
  students: string[];

  @IsNumber()
  @IsOptional()
  qualification?: number; // Puede ser opcional al crear el equipo

  @IsNotEmpty()
  @IsArray()
  @IsMongoId({ each: true })
  projects: string[];
}
