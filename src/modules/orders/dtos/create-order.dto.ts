import { IsNumber, IsDate, IsInt, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @IsDate()
  @IsNotEmpty()
  @Type(() => Date)
  @ApiProperty()
  order_date: Date;

  @IsNumber({ maxDecimalPlaces: 2 })
  @IsNotEmpty()
  @ApiProperty()
  total_amount: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  user_id: number;
}
