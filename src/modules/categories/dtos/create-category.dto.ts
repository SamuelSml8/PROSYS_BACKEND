import { IsString, Length } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @Length(1, 50)
  name: string;

  @IsString()
  @Length(1, 150)
  description: string;
}