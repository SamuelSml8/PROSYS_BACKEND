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
import { CreateOrderDto, UpdateOrderDto } from '../dtos';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiCreatedResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  @ApiOperation({ summary: 'Create a order' })
  @Post('create')
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }

  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  @ApiOperation({ summary: 'Find all orders' })
  @Get('all')
  async getAllOrders(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.orderService.findAllOrders(page, limit);
  }

  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  @ApiOperation({ summary: 'Update order' })
  @Put('update/:id')
  async updateOrder(
    @Param('id') id: number,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.orderService.updateOrder(id, updateOrderDto);
  }

  @ApiOkResponse({ description: 'Success' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiInternalServerErrorResponse({ description: 'Server Error' })
  @ApiOperation({ summary: 'Delete category' })
  @Delete('delete/:id')
  async deleteOrder(@Param('id') id: number) {
    return this.orderService.deleteOrder(id);
  }
}
