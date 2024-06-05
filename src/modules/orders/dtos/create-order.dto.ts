import { IsNumber, IsDate, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @IsDate()
  @Type(() => Date)
  order_date: Date;

  @IsNumber({ maxDecimalPlaces: 2 })
  total_amount: number;

  @IsInt()
  user_id: number;
}
