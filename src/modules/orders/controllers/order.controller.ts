import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { CreateOrderDto } from '../dtos';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('create')
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }

  @Get('all')
  async getAllOrders(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.orderService.findAllOrders(page, limit);
  }

  @Put('update/:id')
  async updateOrder(
    @Param('id') id: number,
    @Body() updateOrderDto: CreateOrderDto,
  ) {
    return this.orderService.updateOrder(id, updateOrderDto);
  }

  @Delete('delete/:id')
  async deleteOrder(@Param('id') id: number) {
    return this.orderService.deleteOrder(id);
  }
}
