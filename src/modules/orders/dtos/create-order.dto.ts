import { IsArray, IsInt, IsNotEmpty, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateOrderDetailDto } from './create-order-detail.dto';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  user_id: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderDetailDto)
  @ApiProperty()
  order_details: CreateOrderDetailDto[];
}
