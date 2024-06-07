import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { ObjectResponse } from 'src/utils/interfaces/object-response.interface';
import { Tokens } from '../types/toke.type';
import { LoginDto } from '../dtos/login-user.dto';
import { RegisterDto } from '../dtos/register-user.dto';
import { User } from 'src/modules/users/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<ObjectResponse<Tokens>> {
    return this.authService.login(loginDto);
  }

  @Post('register')
  async register(
    @Body() registerDto: RegisterDto,
  ): Promise<ObjectResponse<User>> {
    return this.authService.register(registerDto);
  }

  @Post('logout')
  async logout(@Req() req): Promise<ObjectResponse<null>> {
    const token = req.headers.authorization.split(' ')[1];
    return this.authService.logout(token);
  }
}
