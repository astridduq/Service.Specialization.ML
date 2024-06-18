import { IsNotEmpty, IsString, IsMongoId, IsOptional, IsArray } from 'class-validator';

export class VideosDto {
  @IsString()
  @IsNotEmpty()
  video_url: string;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true }) // Valida que cada elemento sea un ObjectId válido
  courses?: string[]; 
}
