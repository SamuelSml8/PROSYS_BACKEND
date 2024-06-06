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
import { ProductService } from '../services/product.service';
import { CreateProductDto, UpdateProductDto } from '../dtos';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  async create(@Body() product: CreateProductDto) {
    return this.productService.create(product);
  }

  @Get('all')
  async findAll(@Query('page') page: number, @Query('limit') limit: number) {
    return this.productService.findAll(page, limit);
  }

  @Get('find/:name')
  async findProductsByName(
    @Param('name') name: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.productService.findProductsByName(name, page, limit);
  }

  @Put('update/:id')
  async update(@Param('id') id: number, @Body() product: UpdateProductDto) {
    return this.productService.updateProduct(id, product);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    return this.productService.deleteProduct(id);
  }
}
