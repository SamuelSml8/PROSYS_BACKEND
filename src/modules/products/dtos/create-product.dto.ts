import { IsString, IsNumber, Min, IsInt, Length } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @Length(1, 50)
  name: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  price: number;

  @IsInt()
  @Min(0)
  stock: number;

  @IsInt()
  category_id: number;
}
