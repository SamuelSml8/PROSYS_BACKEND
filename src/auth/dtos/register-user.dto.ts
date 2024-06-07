import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { LoginDto } from './login-user.dto';

export class RegisterDto extends LoginDto {
  @IsString()
  @Length(1, 50)
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @ApiProperty()
  name: string;

  @IsString()
  @Length(1, 15)
  @Transform(({ value }) => value.trim())
  @ApiProperty()
  telephone: string;

  @IsString()
  @Length(1, 10)
  @Transform(({ value }) => value.trim())
  @ApiProperty()
  role: string;
}
