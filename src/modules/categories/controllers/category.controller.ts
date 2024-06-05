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
import { CategoryService } from '../services/category.service';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('create')
  async createCategory(@Body() category: CreateCategoryDto) {
    return await this.categoryService.createCategory(category);
  }

  @Get('all')
  async findAllCategories(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return await this.categoryService.findAllCategories(page, limit);
  }

  @Get('find/:name')
  async findCategoryByName(
    @Param('name') name: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return await this.categoryService.findCategoryByName(name, page, limit);
  }

  @Put('update/:id')
  async updateCategory(
    @Param('id') id: number,
    @Body() updateCategory: UpdateCategoryDto,
  ) {
    return await this.categoryService.updateCategory(id, updateCategory);
  }

  @Delete('delete/:id')
  async deleteCategory(@Param('id') id: number) {
    return await this.categoryService.deleteCategory(id);
  }
}
