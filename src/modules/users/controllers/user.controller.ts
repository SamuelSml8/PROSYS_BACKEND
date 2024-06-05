import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }

  @Get('find/email/:email')
  async findUserByEmail(@Param('email') email: string) {
    return this.userService.findUserByEmail(email);
  }

  @Get('find/name/:name')
  async findUsersByName(@Param('name') name: string) {
    return this.userService.findUsersByName(name);
  }

  @Get('all')
  async findAllUsers() {
    return this.userService.findAllUsers();
  }

  @Put('update/:id')
  async updatedUser(@Param('id') id: number, @Body() user: UpdateUserDto) {
    return this.userService.updatedUser(id, user);
  }

  @Delete('delete/:id')
  async deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
